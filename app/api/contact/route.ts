import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const message = String(body.message ?? '').trim();

    // Honeypot anti-bot
    const website = String(body.website ?? '').trim();

    if (website) {
      return Response.json({ success: true }, { status: 200 });
    }

    // Validasi
    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: 'Semua field wajib diisi.',
        },
        { status: 400 },
      );
    }

    // Validasi email sederhana
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          success: false,
          message: 'Format email tidak valid.',
        },
        { status: 400 },
      );
    }

    // Batas panjang input
    if (name.length > 100) {
      return Response.json(
        {
          success: false,
          message: 'Nama terlalu panjang.',
        },
        { status: 400 },
      );
    }

    if (email.length > 150) {
      return Response.json(
        {
          success: false,
          message: 'Email terlalu panjang.',
        },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return Response.json(
        {
          success: false,
          message: 'Pesan terlalu panjang.',
        },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY belum dikonfigurasi.');

      return Response.json(
        {
          success: false,
          message: 'Email service belum dikonfigurasi.',
        },
        { status: 500 },
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error('CONTACT_EMAIL belum dikonfigurasi.');

      return Response.json(
        {
          success: false,
          message: 'Email tujuan belum dikonfigurasi.',
        },
        { status: 500 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM || 'Portfolio Contact <onboarding@resend.dev>',

      to: [process.env.CONTACT_EMAIL],

      replyTo: email,

      subject: `Portfolio Contact — ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
          <body
            style="
              margin: 0;
              padding: 40px 20px;
              background: #020617;
              font-family: Arial, sans-serif;
              color: #e2e8f0;
            "
          >
            <div
              style="
                max-width: 650px;
                margin: 0 auto;
                padding: 32px;
                background: #0f172a;
                border: 1px solid #1e293b;
                border-radius: 20px;
              "
            >

              <h1
                style="
                  margin: 0 0 8px;
                  color: #22d3ee;
                  font-size: 24px;
                "
              >
                New Portfolio Message
              </h1>

              <p
                style="
                  margin: 0 0 28px;
                  color: #94a3b8;
                  font-size: 14px;
                "
              >
                Someone sent you a message through your portfolio.
              </p>

              <div
                style="
                  padding: 20px;
                  background: #020617;
                  border-radius: 14px;
                  margin-bottom: 20px;
                "
              >

                <p style="margin: 0 0 12px;">
                  <strong style="color: #22d3ee;">
                    Name
                  </strong>
                  <br />
                  ${safeName}
                </p>

                <p style="margin: 0;">
                  <strong style="color: #22d3ee;">
                    Email
                  </strong>
                  <br />
                  ${safeEmail}
                </p>

              </div>

              <div
                style="
                  padding: 20px;
                  background: #020617;
                  border-radius: 14px;
                "
              >

                <p
                  style="
                    margin: 0 0 12px;
                    color: #22d3ee;
                    font-weight: bold;
                  "
                >
                  Message
                </p>

                <p
                  style="
                    margin: 0;
                    line-height: 1.7;
                    color: #cbd5e1;
                  "
                >
                  ${safeMessage}
                </p>

              </div>

              <p
                style="
                  margin-top: 28px;
                  font-size: 12px;
                  color: #64748b;
                "
              >
                Sent from your personal portfolio contact form.
              </p>

            </div>
          </body>
        </html>
      `,

      text: `
New Portfolio Message

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);

      return Response.json(
        {
          success: false,
          message: 'Pesan gagal dikirim. Silakan coba lagi.',
        },
        { status: 500 },
      );
    }

    return Response.json(
      {
        success: true,
        message: 'Pesan berhasil dikirim.',
        id: data?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Contact API error:', error);

    return Response.json(
      {
        success: false,
        message: 'Terjadi kesalahan pada server.',
      },
      { status: 500 },
    );
  }
}
