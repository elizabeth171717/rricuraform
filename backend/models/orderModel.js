const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderType: { type: String, required: true }, // "Combo Order" or "bulk"
  
  // Combo Order Fields
  people: { type: Number, required: function() { return this.orderType === "Combo Order"; } },
  tamaleFilling: { type: String, required: function() { return this.orderType === "Combo Order"; } },
  drink: { type: String, default: "Coke" },

  // Bulk Order Fields
  quantity: { type: Number, required: function() { return this.orderType === "bulk"; } },
  type: { type: String, required: function() { return this.orderType === "bulk"; } },

  // Customer Info
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },

  // Pricing
  subtotal: { type: Number, required: true },
  tax: { type: Number, required: true },
  deliveryFee: { type: Number, required: true },
  total: { type: Number, required: true },

  // Delivery Details
  deliveryDate: { type: Date, required: true },
  deliveryTime: { type: String, required: true },

  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
