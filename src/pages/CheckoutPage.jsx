import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import CustomerInfo from "../components/CustomerInfo";
import DeliveryDateComponent from "../components/DeliveryDate";
import DeliveryTimeComponent from "../components/DeliveryTime";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const order = location.state || {};

  const navigate = useNavigate();

  // State for customer details and delivery info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [deliveryTime, setDeliveryTime] = useState("");

  const handleSubmit = async () => {
    if (
      !name ||
      !email ||
      !phone ||
      !address ||
      !deliveryDate ||
      !deliveryTime
    ) {
      alert("Please fill out all required fields before proceeding.");
      return;
    }

    const orderData = {
      orderType: order.orderType,
      people: order.people || null,
      tamaleFilling: order.tamaleFilling || null,
      drink: order.drink || null,
      quantity: order.quantity || null,
      type: order.type || null,
      subtotal: order.subtotal,
      tax: order.tax || 0,
      deliveryFee: order.deliveryFee,
      total: order.total,
      name,
      email,
      phone,
      address,
      deliveryDate,
      deliveryTime,
    };

    try {
      const response = await fetch(
        "https://rricuraform.onrender.com/api/orders/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        navigate("/thank-you"); // Redirect to Thank You page
      } else {
        alert(`Error: ${data.message || "Something went wrong!"}`);
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to submit order. Please try again.");
    }
  };

  return (
    <div className="checkout-container">
      <Link to="/" className="back-home">
        ⬅ Back to Home
      </Link>
      <h2>Submit Order</h2>

      {/* Display details for combo orders */}
      {order.orderType === "Combo Order" && (
        <div>
          <p>
            <strong>Number of People:</strong> {order.people}
          </p>
          <p>
            <strong>Tamale Filling:</strong> {order.tamaleFilling}
          </p>
          <p>
            <strong>Drink:</strong> {order.drink}
          </p>
        </div>
      )}

      {/* Display details for bulk orders */}
      {order.orderType === "bulk" && (
        <div>
          <p>
            <strong>Quantity:</strong> {order.quantity} tamales
          </p>
          <p>
            <strong>Tamale Type:</strong> {order.type}
          </p>
        </div>
      )}

      {/* Price Breakdown */}
      <h3>Price Breakdown</h3>
      <p>
        <strong>Subtotal:</strong> ${order.subtotal.toFixed(2)}
      </p>
      {order.tax && (
        <p>
          <strong>Tax:</strong> ${order.tax.toFixed(2)}
        </p>
      )}
      <p>
        <strong>Delivery Fee:</strong> ${order.deliveryFee.toFixed(2)}
      </p>
      <h3>
        <strong>Total:</strong> ${order.total.toFixed(2)}
      </h3>

      {/* Customer Info */}
      <CustomerInfo
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        address={address}
        setAddress={setAddress}
      />

      {/* Delivery Date */}
      <DeliveryDateComponent onDateSelect={setDeliveryDate} />

      {/* Delivery Time */}
      <DeliveryTimeComponent
        selectedTime={deliveryTime}
        onTimeSelect={setDeliveryTime}
      />

      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
};

export default CheckoutPage;
