const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel"); // Ensure you have this model

// Handle order submission
router.post("/submit", async (req, res) => {
  console.log("Received order data:", req.body); // Debugging log
  console.log("Received request body:", JSON.stringify(req.body, null, 2)); // Pretty print JSON

  

  try {
    // Save the order to the database
    const newOrder = new Order(req.body);
    await newOrder.save();

    // Send the order confirmation email to the customer
    await sendOrderConfirmation(customerEmail, orderData);

    res.status(201).json({ message: "Order submitted successfully and confirmation email sent!" });
  } catch (error) {
    console.error("Error saving order:", error); // Log backend error
    res.status(500).json({ message: "Server error, could not submit order" });
  }
});

module.exports = router;

