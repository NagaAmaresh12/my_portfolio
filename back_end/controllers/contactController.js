const Contact = require('../../back_end/models/User.js');
const Joi = require('joi');
require('dotenv').config();
const nodemailer = require('nodemailer');

// Joi validation schema
const contactSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    organisation: Joi.string().min(10).required(),
    expectation: Joi.string().min(10).required(),
    message: Joi.string().min(10).required(),
});

const contactController = async (req, res) => {
    const { name, email, organisation, expectation, message } = req.body;

    // Validate data with Joi
    const { error } = contactSchema.validate({ name, email, organisation, expectation, message });
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        // Check if user exists
        const existingUser = await Contact.findOne({ email });
        
        if (existingUser) {
            // If user exists, send response and do not send email
            res.status(200).json({ message: `Welcome back, ${existingUser.name}` });
        } else {
            // Create new contact
            const newContact = new Contact({ name, email, organisation, expectation, message });
            await newContact.save();

            // Send thank you message for new visitors
            res.status(200).json({ message: `Thank you for visiting, ${name}!` });

            // Send email notification (do not await, since the response is already sent)
            sendEmail(name, email, organisation, expectation, message);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const sendEmail = (name, email, organisation, expectation, message) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Sending the email to yourself
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nOrganisation: ${organisation}\nExpectation: ${expectation}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Failed to send email:', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

module.exports = contactController;
