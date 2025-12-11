// Simple Express backend to email contact form submissions
// 1) npm init -y
// 2) npm install express cors nodemailer dotenv
// 3) create .env (see example below)
// 4) node backend/server.js

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, company, budget, details, brandkit } = req.body;
  
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const message = {
    from: `Logo Studio <${process.env.SMTP_USER}>`,
    to: process.env.TO_EMAIL,
    replyTo: email,
    subject: 'New contact form submission',
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || ''}\nBudget: ${budget}\nBrand kit: ${brandkit ? 'Yes' : 'No'}\n\nDetails:\n${details}`,
  };

  try{
    await transporter.sendMail(message);
    res.status(200).json({ ok: true });
  }catch(err){
    console.error('Email error:', err);
    res.status(500).json({ ok: false, error: 'Email failed' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Contact API listening on http://localhost:${port}`));
