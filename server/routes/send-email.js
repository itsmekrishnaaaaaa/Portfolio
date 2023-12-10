const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { UserName, email, Message } = req.body;

  try {
    // Create a transporter using your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'krishnagod889@gmail.com',
        pass: 'qqdu kasp wfjh deip'
      }
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL,
      to: 'krishnasap547@gmail.com', // Replace with your actual Gmail address
      subject: 'New Contact Form Submission',
      text: `Name: ${UserName}\nEmail: ${email}\nMessage: ${Message}`
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
