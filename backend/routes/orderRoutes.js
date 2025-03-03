const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel"); // Ensure you have this model
const { sendOrderProcessingEmail } = require("../controllers/emailController"); // ✅ Import email function


router.post("/submit", async (req, res) => {
  console.log("Received order data:", req.body); 
  console.log("Received request body:", JSON.stringify(req.body, null, 2)); 

  try {
    // Save the order to the database
    const newOrder = new Order(req.body);
    await newOrder.save();

    // ✅ Correctly extract email and name from request body
    const { email, name, ...orderDetails } = req.body;

    // ✅ Generate an order summary string
    const orderSummary = `
      Order Type: ${orderDetails.orderType}
      Quantity: ${orderDetails.quantity}
      Tamale Type: ${orderDetails.type}
      Subtotal: $${orderDetails.subtotal}
      Tax: $${orderDetails.tax}
      Delivery Fee: $${orderDetails.deliveryFee}
      Total: $${orderDetails.total}
      Delivery Date: ${new Date(orderDetails.deliveryDate).toDateString()}
      Delivery Time: ${orderDetails.deliveryTime}
      Address: ${orderDetails.address}
    `;

    // ✅ Send order processing email
    if (email && name) {
      await sendOrderProcessingEmail(email, name, orderSummary);
    }

    res.status(201).json({ message: "Order submitted successfully and confirmation email sent!" });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ message: "Server error, could not submit order" });
  }
});


module.exports = router;

