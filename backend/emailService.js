import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com", // ✅ Brevo SMTP host
  port: 587, // ✅ Use port 587 for TLS (or 465 for SSL)
  secure: false, // ❌ Must be false for port 587 (true for 465)
  auth: {
    user: process.env.EMAIL_USER, // ✅ Your Brevo-verified email
    pass: process.env.BREVO_API_KEY, // ✅ The SMTP key you generated in Brevo
  },
});

export const sendOrderConfirmation = async (customerEmail, orderData) => {

  if (!orderData || typeof orderData !== "object") {
    console.error("❌ orderData is missing or not an object:", orderData);
    throw new Error("Invalid orderData provided to sendOrderConfirmation.");
  }
  try {
    const mailOptions = {
      from: `"Rricura Tamales Mexicanos" <${process.env.EMAIL_USER}>`, // ✅ Your sender name & email
      to: customerEmail, // ✅ Customer's email
      subject: "Order Confirmation - Rricura Tamales Mexicanos",
      html: `
        <h2>Thank You for Your Order!</h2>
       
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Order confirmation email sent to", customerEmail);
    return info;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
};
