import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "29fcf85fa42e5c",
    pass: "d799b15850355e",
  },
});
export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }) {
    transport.sendMail({
      from: "Equipe FeedGet <oi@feedget.com>",
      to: "Raphael <raphaelfreire.dias@gmail.com",
      subject,
      html: body,
    });
  }
}
