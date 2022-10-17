import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
// Login To Email
const transport = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SEND_GRID_KEY,
  },
});
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (
    typeof request.body.name != 'string' ||
    typeof request.body.email != 'string' ||
    typeof request.body.phone != 'string' ||
    typeof request.body.message != 'string'
  ) {
    response.redirect(307, '/Contact?failed=1');
    return;
  }
  console.log('Sending Email');
  // Send Email
  await transport
    .sendMail({
      // TODO: Secure this from injection
      from: `"WebSite - ${request.body.name}" <webSite@cmmPrecision.ca>`, // sender address
      to: 'dfollest@live.com', // list of receivers
      subject: `${request.body.name} - ${request.body.email}`, // Subject line
      text: [
        `${request.body.name} Sent:`,
        request.body.message,
        '',
        'Contact Information:',
        `Phone: ${request.body.phone}`,
        `Email: ${request.body.email}`,
      ].join('\n'), // plain text body
    })
    .catch((err) => {
      console.log('There was an error');
      console.log(err.message);
      response.redirect(307, '/Contact?failed=1');
    });
  // Try And Send Email
  response.redirect(307, '/Contact?failed=0');
}
