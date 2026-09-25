import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { buildQuoteEmailHtml } from './api/send-quote';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'resend-api-middleware',
          configureServer(server) {
            server.middlewares.use('/api/send-quote', async (req: any, res: any) => {
              if (req.method !== 'POST') {
                res.statusCode = 405;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, error: 'Method Not Allowed' }));
                return;
              }

              let body = '';
              req.on('data', (chunk: any) => { body += chunk; });
              req.on('end', async () => {
                try {
                  const data = JSON.parse(body || '{}');
                  const { name, email, phone, service, message } = data;

                  if (!name || !email || !phone) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ success: false, error: 'Name, email, and phone number are required.' }));
                    return;
                  }

                  const resendApiKey = process.env.RESEND_API_KEY || env.RESEND_API_KEY;
                  const notificationEmail = process.env.NOTIFICATION_EMAIL || env.NOTIFICATION_EMAIL || 'network4technologies@gmail.com';
                  const fromEmail = process.env.FROM_EMAIL || env.FROM_EMAIL || 'N4T Quotes <onboarding@resend.dev>';

                  if (!resendApiKey || resendApiKey.trim() === '' || resendApiKey.includes('your_api_key')) {
                    res.statusCode = 400;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ 
                      success: false, 
                      error: 'RESEND_API_KEY is not configured in .env yet. Please paste your Resend API key into the .env file to enable email delivery.',
                      needsConfig: true
                    }));
                    return;
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
                    res.statusCode = resendResponse.status;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ 
                      success: false, 
                      error: resendData.message || 'Resend API returned an error.',
                      details: resendData 
                    }));
                    return;
                  }

                  res.statusCode = 200;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ 
                    success: true, 
                    message: 'Quote request sent to your email successfully via Resend!',
                    id: resendData.id 
                  }));
                } catch (err: any) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: false, error: err.message || 'Internal server error' }));
                }
              });
            });
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
