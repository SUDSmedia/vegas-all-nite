import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, guests, date, packageType, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !guests || !date || !packageType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailHtml = `
      <h2>New Booking Request from Vegas All Nite Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Number of Guests:</strong> ${guests}</p>
      <p><strong>Preferred Date:</strong> ${date}</p>
      <p><strong>Package Type:</strong> ${packageType}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    // Send email using Resend
    // Note: You'll need to set RESEND_API_KEY in your environment variables
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Vegas All Nite <onboarding@resend.dev>', // Change this to your verified domain
        to: process.env.CONTACT_EMAIL || 'info@vegasallnite.com',
        subject: `New Booking Request from ${name}`,
        html: emailHtml,
        replyTo: email,
      });
    } else {
      // For development without API key, just log the submission
      console.log('Contact form submission:', body);
    }

    // Send confirmation email to customer
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Vegas All Nite <onboarding@resend.dev>',
        to: email,
        subject: 'Thank You for Contacting Vegas All Nite',
        html: `
          <h2>Thank You, ${name}!</h2>
          <p>We've received your booking request and will get back to you within 2-4 hours.</p>
          <p><strong>Your Request Details:</strong></p>
          <ul>
            <li>Package: ${packageType}</li>
            <li>Guests: ${guests}</li>
            <li>Preferred Date: ${date}</li>
          </ul>
          <p>Our concierge team is excited to help create your perfect Vegas experience!</p>
          <p>Best regards,<br>Vegas All Nite Team</p>
        `,
      });
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
