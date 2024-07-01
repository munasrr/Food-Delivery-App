import nodemailer from 'nodemailer';
import expressAsyncHandler from 'express-async-handler';

const sendPasswordResetEmail = expressAsyncHandler(async (user, resetToken) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465, // Use 465 for SSL
      secure: true, // true for port 465, false for port 587
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      debug: true,
      logger: true,
    });

    const resetUrl = `http://localhost:${process.env.PORT}/reset-password/${resetToken}`;

    const emailContent = `
        <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
          <div style="background-color: #ffffff; padding: 20px; border-radius: 5px;">
            <p style="text-align: center;">Hi ${user.name}</p>
            <h1 style="text-align: center; color: #333;">Reset Your Password</h1>
            <p style="text-align: center; color: #333;">
              Please click on the button below to reset your password.
            </p>
            <div style="text-align: center;">
            <a href="${resetUrl}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px;">
                Reset Password
              </a>
            </div>
          </div>
        </div>
      `;

    const mailOptions = {
      from: process.env.EMAIL,
      to: user.email,
      subject: 'Password Reset Request',
      text: `You requested a password reset. Click the link to reset your password: ${resetUrl}`,
      // html: `<p>You requested a password reset. Click the link to reset your password:</p><a href="${resetUrl}">${resetUrl}</a>`,
      html: emailContent,
    };

    transporter.verify(function (error, success) {
      if (error) {
        console.error('Verification error:', error);
      } else {
        console.log('Server is ready to take our messages');
      }
    });

    await transporter.sendMail(mailOptions);
    console.log('Password reset email sent successfully');
  } catch (error) {
    console.error('Error sending password reset email:', error);
  }
});

export { sendPasswordResetEmail };
