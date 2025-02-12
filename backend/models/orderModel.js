const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  address: { type: String, required: true },
  people: { type: String, required: true },
  tamaleFilling: { type: String, required: true },
  drink: { type: String, required: true },
  subtotal: { type: Number, required: true }, // Subtotal based on selected items
  total: { type: Number, required: true }, // Total price of the order
  deliveryDate: { type: Date, required: true },
  deliveryTime: { type: String, required: true }, // Time selected by customer
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
