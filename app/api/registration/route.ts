import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, plan, goals, experience } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !plan || !goals || !experience) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Plan names for display
    const planNames: Record<string, string> = {
      starter: 'Starter ($50/month)',
      professional: 'Professional ($100/month)',
      elite: 'Elite ($200/month)',
    };

    // Send registration notification email to admin
    const adminEmail = await resend.emails.send({
      from: 'Berry Strong Website <registration@berrystrong.net>',
      to: 'info@berrystrong.net',
      subject: `New Registration: ${firstName} ${lastName} - ${planNames[plan]}`,
      html: `
        <h2>New Training Plan Registration</h2>
        <h3>Client Information</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Selected Plan:</strong> ${planNames[plan]}</p>

        <h3>Fitness Goals</h3>
        <p>${goals.replace(/\n/g, '<br>')}</p>

        <h3>Previous Experience</h3>
        <p>${experience.replace(/\n/g, '<br>')}</p>

        <hr>
        <p><em>This registration was submitted through the Berry Strong website.</em></p>
      `,
    });

    // Send confirmation email to client
    const clientEmail = await resend.emails.send({
      from: 'Berry Strong <info@berrystrong.net>',
      to: email,
      subject: 'Welcome to Berry Strong!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #dc2626;">Welcome to Berry Strong!</h1>
          <p>Hi ${firstName},</p>
          <p>Thank you for registering for our <strong>${planNames[plan]}</strong> plan!</p>

          <p>We've received your registration and will contact you within 24 hours to:</p>
          <ul>
            <li>Schedule your initial consultation</li>
            <li>Discuss your fitness goals in detail</li>
            <li>Set up your training program</li>
            <li>Answer any questions you have</li>
          </ul>

          <p><strong>Next Steps:</strong></p>
          <ol>
            <li>Check your email for our welcome packet</li>
            <li>We'll contact you at ${phone} to schedule your consultation</li>
            <li>Complete any required health forms before your first session</li>
          </ol>

          <p>If you have any questions in the meantime, feel free to reply to this email or call us at your convenience.</p>

          <p style="margin-top: 30px;"><strong>Berry Strong Fitness</strong></p>
          <p>Plymouth, MA</p>
          <p><a href="mailto:info@berrystrong.net">info@berrystrong.net</a></p>
        </div>
      `,
    });

    if (adminEmail.error || clientEmail.error) {
      console.error('Error sending emails:', adminEmail.error || clientEmail.error);
      return NextResponse.json(
        { error: 'Failed to process registration. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Registration successful! Check your email for confirmation.',
        data: { adminEmail, clientEmail }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
