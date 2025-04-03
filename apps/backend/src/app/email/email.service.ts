import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS},});
  }

  async sendMail(to: string, subject: string, text: string): Promise<void> {
    const mailOptions = { from: process.env.EMAIL_USER, to, subject, text };

    await this.transporter.sendMail(mailOptions);
  }

  async sendPasswordResetEmail(to: string, resetToken: string): Promise<void> {
    const subject = 'Password Reset Request';
    const text = `You requested a password reset. Use the following token to reset your password: ${resetToken}`;
    await this.sendMail(to, subject, text);
  }
}