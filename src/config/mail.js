import nodemailer from "nodemailer";
import dotenv from "dotenv";

// load env values
dotenv.config();

/**
 * Create a mail transporter with the provided configuration using mail trap
 *
 */
const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: process.env.MAILTRAP_PORT,
  secure: true,
  auth: {
    user: process.env.MAILTRAP_USER, // Get the Mailtrap username from the environment variable
    pass: process.env.MAILTRAP_PASS, // Get the Mailtrap password from the environment variable
  },
});

export default transporter;
