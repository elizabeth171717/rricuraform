const SibApiV3Sdk = require("sib-api-v3-sdk");
const dotenv = require("dotenv");

dotenv.config();

const sendOrderProcessingEmail = async (customerEmail, customerName, orderSummary) => {
    if (!customerEmail || !customerName || !orderSummary) {
        throw new Error("Missing required fields"); // Instead of returning a response, throw an error
    }

    try {
        let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
        apiInstance.apiClient.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

        let sendSmtpEmail = {
            to: [{ email: customerEmail, name: customerName }],
            sender: { email: "your-email@yourdomain.com", name: "Rricura Tamales Mexicanos" },
            subject: "We Are Processing Your Order",
            htmlContent: `<p>Hi ${customerName},</p>
                          <p>Thank you for your order! We are processing it and will update you soon.</p>
                          <p><strong>Order Summary:</strong><br>${orderSummary.replace(/\n/g, "<br>")}</p>
                          <p>Best, <br>Rricura Tamales Mexicanos</p>`,
        };

        await apiInstance.sendTransacEmail(sendSmtpEmail);
        return { message: "Email sent successfully" }; // ✅ Return success instead of sending a response
    } catch (error) {
        console.error("Error sending email:", error);
        throw new Error("Failed to send email"); // ✅ Throw an error instead of handling response
    }
};

module.exports = { sendOrderProcessingEmail };
