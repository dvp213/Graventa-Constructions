import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration
const emailConfig = {
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER || "resolverslab@gmail.com",
    pass: process.env.SMTP_PASS || "sfhughrdztpfztsh",
  },
}

const OFFICE_EMAIL = process.env.OFFICE_EMAIL || "graventaconstruction@gmail.com"
const FROM_EMAIL = process.env.FROM_EMAIL || "resolverslab@gmail.com"
const FROM_NAME = process.env.FROM_NAME || "Graventa Website"

// Subject mapping for better email organization
const subjectMapping: Record<string, string> = {
  quote: "Request Quote",
  commercial: "Commercial Project Inquiry",
  residential: "Residential Project Inquiry",
  renovation: "Renovation Inquiry",
  other: "General Inquiry",
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, subject, and message are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport(emailConfig)

    // Get readable subject
    const readableSubject = subjectMapping[subject] || subject

    // Email content for office
    const officeEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0a;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border-radius: 16px; overflow: hidden; border: 1px solid #2a2a2a;">
              <!-- Header -->
              <div style="background: linear-gradient(90deg, #d4a012 0%, #b8860b 100%); padding: 30px; text-align: center;">
                <h1 style="color: #0a0a0a; margin: 0; font-size: 24px; font-weight: 700;">
                  New Contact Form Submission
                </h1>
              </div>
              
              <!-- Content -->
              <div style="padding: 30px;">
                <div style="margin-bottom: 24px;">
                  <p style="color: #d4a012; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px 0;">Subject</p>
                  <p style="color: #ffffff; font-size: 18px; font-weight: 600; margin: 0;">${readableSubject}</p>
                </div>
                
                <div style="background: #1a1a1a; border-radius: 12px; padding: 20px; margin-bottom: 24px; border: 1px solid #2a2a2a;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a;">
                        <span style="color: #888; font-size: 14px;">Name</span><br>
                        <span style="color: #fff; font-size: 16px; font-weight: 500;">${name}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a;">
                        <span style="color: #888; font-size: 14px;">Email</span><br>
                        <a href="mailto:${email}" style="color: #d4a012; font-size: 16px; text-decoration: none;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; ${phone ? 'border-bottom: 1px solid #2a2a2a;' : ''}">
                        <span style="color: #888; font-size: 14px;">Phone</span><br>
                        <span style="color: #fff; font-size: 16px;">${phone || 'Not provided'}</span>
                      </td>
                    </tr>
                  </table>
                </div>
                
                <div>
                  <p style="color: #d4a012; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px 0;">Message</p>
                  <div style="background: #1a1a1a; border-radius: 12px; padding: 20px; border: 1px solid #2a2a2a;">
                    <p style="color: #e0e0e0; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
                  </div>
                </div>
                
                <!-- Reply Button -->
                <div style="text-align: center; margin-top: 30px;">
                  <a href="mailto:${email}?subject=Re: ${readableSubject}" 
                     style="display: inline-block; background: linear-gradient(90deg, #d4a012 0%, #b8860b 100%); color: #0a0a0a; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 14px;">
                    Reply to ${name}
                  </a>
                </div>
              </div>
              
              <!-- Footer -->
              <div style="background: #0d0d0d; padding: 20px; text-align: center; border-top: 1px solid #2a2a2a;">
                <p style="color: #666; font-size: 12px; margin: 0;">
                  This email was sent from the Graventa Constructions website contact form.
                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Email content for customer (auto-reply)
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Contacting Us</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0a;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border-radius: 16px; overflow: hidden; border: 1px solid #2a2a2a;">
              <!-- Header -->
              <div style="background: linear-gradient(90deg, #d4a012 0%, #b8860b 100%); padding: 30px; text-align: center;">
                <h1 style="color: #0a0a0a; margin: 0; font-size: 24px; font-weight: 700;">
                  GRAVENTA
                </h1>
                <p style="color: #0a0a0a; margin: 5px 0 0 0; font-size: 12px; letter-spacing: 3px;">CONSTRUCTIONS</p>
              </div>
              
              <!-- Content -->
              <div style="padding: 30px;">
                <h2 style="color: #ffffff; font-size: 22px; margin: 0 0 20px 0;">Thank You for Reaching Out!</h2>
                
                <p style="color: #e0e0e0; font-size: 15px; line-height: 1.7; margin: 0 0 20px 0;">
                  Dear ${name},
                </p>
                
                <p style="color: #e0e0e0; font-size: 15px; line-height: 1.7; margin: 0 0 20px 0;">
                  Thank you for contacting Graventa Constructions. We have received your message regarding 
                  <strong style="color: #d4a012;">"${readableSubject}"</strong> and our team will review it promptly.
                </p>
                
                <p style="color: #e0e0e0; font-size: 15px; line-height: 1.7; margin: 0 0 20px 0;">
                  We typically respond within 24-48 business hours. If your matter is urgent, please don't hesitate 
                  to call us directly at <a href="tel:+94728715398" style="color: #d4a012; text-decoration: none;">+94 72 871 5398</a>.
                </p>
                
                <div style="background: #1a1a1a; border-radius: 12px; padding: 20px; margin: 24px 0; border: 1px solid #2a2a2a;">
                  <p style="color: #d4a012; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px 0;">Your Message</p>
                  <p style="color: #888; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
                
                <p style="color: #e0e0e0; font-size: 15px; line-height: 1.7; margin: 0;">
                  Best regards,<br>
                  <strong style="color: #d4a012;">The Graventa Team</strong>
                </p>
              </div>
              
              <!-- Footer -->
              <div style="background: #0d0d0d; padding: 20px; text-align: center; border-top: 1px solid #2a2a2a;">
                <p style="color: #888; font-size: 13px; margin: 0 0 10px 0;">
                  Graventa Constructions (Pvt) Ltd
                </p>
                <p style="color: #666; font-size: 12px; margin: 0;">
                  561/A, Madhiwela Road, Thalawathugoda, Sri Lanka<br>
                  <a href="tel:+94728715398" style="color: #d4a012; text-decoration: none;">+94 72 871 5398</a> | 
                  <a href="mailto:graventaconstruction@gmail.com" style="color: #d4a012; text-decoration: none;">graventaconstruction@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email to office
    await transporter.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: OFFICE_EMAIL,
      subject: `[Website] ${readableSubject} - ${name}`,
      html: officeEmailHtml,
      replyTo: email,
    })

    // Send auto-reply to customer
    await transporter.sendMail({
      from: `"Graventa Constructions" <${FROM_EMAIL}>`,
      to: email,
      subject: `Thank You for Contacting Graventa Constructions`,
      html: customerEmailHtml,
    })

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    )
  }
}

