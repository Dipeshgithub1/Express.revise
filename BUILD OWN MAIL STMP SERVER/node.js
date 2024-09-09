const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 25,
  secure: false, // Use true for TLS
  auth: {
    user: 'user', // Optional for testing if using authentication
    pass: 'pass'
  }
});

let mailOptions = {
  from: '"Sender Name" <sender@example.com>',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'Hello, this is a test email from my SMTP server!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});
