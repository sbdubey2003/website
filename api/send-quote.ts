/**
 * Serverless / API Route: /api/send-quote
 * Handles quote requests and sends email notifications via Resend API
 * Fully compatible with Vercel Serverless Functions and Vite Dev Server
 */

export interface QuotePayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export function buildQuoteEmailHtml(data: QuotePayload, submittedAt: string): string {
  const cleanPhone = data.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone}`;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Quote Request - N4T</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #1e293b; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: linear-gradient(135deg, #1e3a8a, #2563eb); padding: 28px 32px; color: #ffffff; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; }
    .header p { margin: 6px 0 0; font-size: 13px; color: #bfdbfe; }
    .content { padding: 32px; }
    .badge { display: inline-block; padding: 4px 12px; background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe; border-radius: 20px; font-size: 12px; font-weight: 600; margin-bottom: 20px; }
    .field-group { margin-bottom: 18px; }
    .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 700; margin-bottom: 4px; }
    .field-value { font-size: 15px; color: #0f172a; font-weight: 600; }
    .message-box { background: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; border-radius: 0 8px 8px 0; margin-top: 8px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
    .btn-group { margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; }
    .btn-email { display: inline-block; background: #2563eb; color: #ffffff !important; text-decoration: none; padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: 600; margin-right: 10px; margin-bottom: 8px; }
    .btn-whatsapp { display: inline-block; background: #10b981; color: #ffffff !important; text-decoration: none; padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: 600; margin-bottom: 8px; }
    .footer { background: #f8fafc; padding: 18px 32px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>💼 New Commercial Quote Request</h1>
      <p>Network 4 Technologies — Web Inquiry System</p>
    </div>
    <div class="content">
      <div class="badge">N4T Lead Notification</div>

      <div class="field-group">
        <div class="field-label">Client Name</div>
        <div class="field-value">${escapeHtml(data.name)}</div>
      </div>

      <div class="field-group">
        <div class="field-label">Work Email</div>
        <div class="field-value"><a href="mailto:${escapeHtml(data.email)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(data.email)}</a></div>
      </div>

      <div class="field-group">
        <div class="field-label">Phone Number</div>
        <div class="field-value"><a href="tel:${escapeHtml(data.phone)}" style="color: #0f172a; text-decoration: none;">${escapeHtml(data.phone)}</a></div>
      </div>

      <div class="field-group">
        <div class="field-label">Requested Service</div>
        <div class="field-value" style="color: #2563eb;">${escapeHtml(data.service)}</div>
      </div>

      <div class="field-group">
        <div class="field-label">Requirement Scope & Details</div>
        <div class="message-box">${escapeHtml(data.message)}</div>
      </div>

      <div class="btn-group">
        <a href="mailto:${escapeHtml(data.email)}?subject=Re: N4T Quote Request - ${encodeURIComponent(data.service)}" class="btn-email">
          ✉️ Reply via Email
        </a>
        <a href="${whatsappUrl}" target="_blank" class="btn-whatsapp">
          💬 Connect on WhatsApp
        </a>
      </div>
    </div>
    <div class="footer">
      Received on ${submittedAt} | Network 4 Technologies (N4T) Automated Lead Notification
    </div>
  </div>
</body>
</html>
  `;
}

function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Vercel Serverless Function Handler
 */
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { name, email, phone, service, message } = data || {};

    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, error: 'Name, email, and phone number are required.' });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'network4technologies@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'N4T Quotes <onboarding@resend.dev>';

    if (!resendApiKey || resendApiKey.trim() === '') {
      return res.status(400).json({ 
        success: false, 
        error: 'RESEND_API_KEY is not configured in Vercel Environment Variables.',
        needsConfig: true 
      });
    }

    const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const html = buildQuoteEmailHtml({ 
      name, 
      email, 
      phone, 
      service: service || 'IT AMC Support', 
      message: message || 'N/A' 
    }, submittedAt);

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey.trim()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [notificationEmail],
        reply_to: email,
        subject: `💼 New Commercial Quote Request: ${name} (${service || 'IT Solutions'})`,
        html
      })
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      return res.status(resendResponse.status).json({ 
        success: false, 
        error: resendData.message || 'Resend API returned an error.',
        details: resendData 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Quote request sent to your email successfully via Resend!',
      id: resendData.id 
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: err.message || 'Internal server error' });
  }
}
