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

export const sendOrderConfirmation = async (customerEmail, customerName, orderData) => {

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
        <h2>Thank You for Your Order, ${customerName}!</h2>
        <p>We are processing your order and will contact you soon.</p>
        <h3>Order Details:</h3>
        <pre>${JSON.stringify(orderData, null, 2)}</pre>
        

        <p><strong>Total Paid:</strong> $${orderData.total.toFixed(2)}</p>
        <p>If you have any questions, reply to this email.</p>
        <br>
        <p>Best,</p>
        <p>Rricura Tamales Mexicanos</p>
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
