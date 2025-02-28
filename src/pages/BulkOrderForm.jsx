import { useState } from "react";

import { Link } from "react-router-dom";
import TaxCalculator from "../components/TaxCalculator";
import DeliveryFee from "../components/DeliveryFee";
import { useNavigate } from "react-router-dom";
import sweet from "../assets/sweettamale.png";
import bananaleafpork from "../assets/bananaleafpork.jpg";
import bananaleafchicken from "../assets/bananaleafchicken.jpg";
import chickentamale from "../assets/chickentamale.jpg";
import rajastamale from "../assets/rajastamale.jpg";
import cornporktamale from "../assets/cornporktamale.jpg";
import vegantamale from "../assets/cheeseredsauce.jpg";

// Tamale options with image sources
const tamaleOptions = [
  {
    value: "Rajas",
    label: "Rajas tamale 'Pepper & Cheese'",
    img: rajastamale,
  },
  {
    value: "ChickenCornHusk",
    label: "Chicken Corn Husk tamale",
    img: chickentamale,
  },
  {
    value: "PorkCornHusk",
    label: "Pork Corn Husk tamale",
    img: cornporktamale,
  },
  {
    value: "ChickenBananaLeaf",
    label: "Chicken Banana Leaf tamale",
    img: bananaleafchicken,
  },
  {
    value: "PorkBananaLeaf",
    label: " Pork Banana Leaf tamale",
    img: bananaleafpork,
  },
  { value: "Sweet", label: "Red Sweet Tamale", img: sweet },
  {
    value: "Vegan",
    label: "Vegan tamale'Pepper, Cheese & vegan oil'",
    img: vegantamale,
  },
];

const tamalePrices = {
  Sweet: 3.0,
  Rajas: 4.0,
  ChickenCornHusk: 4.0,
  PorkCornHusk: 4.0,
  ChickenBananaLeaf: 6.0,
  PorkBananaLeaf: 6.0,
  Vegan: 5.0,
};

const bulkOptions = [12, 24, 30, 50, 100, 200];

const BulkOrderForm = () => {
  const [bulkQuantity, setBulkQuantity] = useState("");
  const [tamaleType, setTamaleType] = useState("");
  const [subtotalPrice, setSubtotalPrice] = useState(0);

  const navigate = useNavigate();

  const deliveryFee = 5.0; // Fixed delivery fee
  const taxRate = 0.08; // 8% tax

  const handleCalculatePrice = (quantity, type) => {
    if (quantity && type) {
      const price = quantity * tamalePrices[type];
      setSubtotalPrice(price);
    }
  };

  // Calculate tax and total
  const taxAmount = subtotalPrice * taxRate;
  const totalPrice = subtotalPrice + taxAmount + deliveryFee;

  const handleCheckout = () => {
    const orderDetails = {
      orderType: "bulk",
      quantity: bulkQuantity,
      type: tamaleType,
      subtotal: subtotalPrice,
      tax: taxAmount,
      deliveryFee: deliveryFee,
      total: totalPrice,
    };

    navigate("/CheckoutPage", { state: orderDetails });
  };

  return (
    <div className="order-form-container">
      <Link to="/" className="back-home">
        ⬅ Back to Home
      </Link>
      <div className="title-container">
        <h2>We bring the authentic flavors of Mexico straight to your event</h2>
        <p>
          We require a 2-day notice for all orders. We do not deliver Sundays!
        </p>
      </div>
      {/* Bulk Quantity Selection */}
      <h3>How many tamales do you need?</h3>
      <select
        value={bulkQuantity}
        onChange={(e) => {
          const quantity = parseInt(e.target.value);
          setBulkQuantity(quantity);
          handleCalculatePrice(quantity, tamaleType);
        }}
      >
        <option value="">Select</option>
        {bulkOptions.map((qty) => (
          <option key={qty} value={qty}>
            {qty}
          </option>
        ))}
      </select>
      <br />
      <br />

      {/* Tamale Type Selection (with images and clickable cards) */}
      <h3>Select your Tamale :</h3>
      <div className="tamale-options">
        {tamaleOptions.map((tamale) => (
          <div
            key={tamale.value}
            className={`tamale-card ${
              tamaleType === tamale.value ? "selected" : ""
            }`}
            onClick={() => {
              setTamaleType(tamale.value);
              handleCalculatePrice(bulkQuantity, tamale.value);
            }}
          >
            <img src={tamale.img} alt={tamale.label} />
            <p>{tamale.label}</p>
          </div>
        ))}
      </div>

      {/* Display Prices */}
      {subtotalPrice > 0 && (
        <div>
          <p>
            Subtotal: <strong>${subtotalPrice.toFixed(2)}</strong>
          </p>
          <TaxCalculator subtotal={subtotalPrice} />
          <DeliveryFee />
          <p>
            Total Price: <strong>${totalPrice.toFixed(2)}</strong>
          </p>
        </div>
      )}

      <button onClick={handleCheckout} disabled={!bulkQuantity || !tamaleType}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default BulkOrderForm;
