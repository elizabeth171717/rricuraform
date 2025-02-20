import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

import DeliveryDateComponent from "../components/DeliveryDate";
import DeliveryTimeComponent from "../components/DeliveryTime";
import CustomerInfo from "../components/CustomerInfo";
import TamaleForm from "../components/TamaleForm";
import PriceCalculator from "../components/PriceCalculator";
import TotalCalculator from "../components/TotalCalculator"; // This assumes you already have this component
import Logo from "../assets/logo.png";

import "../App.css";

const CateringOrderForm = () => {
  const [people, setPeople] = useState("");
  const [tamaleFilling, setTamaleFilling] = useState("");
  const [drink, setDrink] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const [subtotal, setSubtotal] = useState(0); // Add subtotal state
  const [total, setTotal] = useState(0);

  const navigate = useNavigate(); // Get the navigate function
  // This function updates the subtotal when PriceCalculator calculates it
  const handleSubtotalChange = (newSubtotal) => {
    setSubtotal(newSubtotal);
  };

  // This function will be passed to TotalCalculator to update the total
  const handleTotalChange = (calculatedTotal) => {
    setTotal(calculatedTotal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      people,
      tamaleFilling,

      drink,
      name,
      email,
      phone,
      address,
      deliveryDate: selectedDate,
      deliveryTime: selectedTime,
      subtotal,
      total,
    };

    console.log("Order Data before submission:", orderData); // Debugging line
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

      if (!response.ok) {
        // Check if response has data before parsing

        throw new Error("Failed to submit order");
      }

      const data = await response.json();
      console.log("Server Response:", data);

      // After the alert, navigate to the Thank You page
      navigate("/thank-you");
      // Optionally clear form fields after successful submission
      setPeople("");
      setTamaleFilling("");

      setDrink("");
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setSelectedDate("");
      setSelectedTime("");
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("There was an issue submitting your order. Please try again.");
    }
  };

  return (
    <div className="order-form-container">
      <img src={Logo} />
      <a href="https://www.rricuratamales.com" className="back-home-button">
        ← Back to Home
      </a>
      <h2>We required a 2 days notice in all orders</h2>

      <p> 2 Tamales plus Drink starting at $12.00 per person</p>
      <form onSubmit={handleSubmit}>
        <div className="left">
          <TamaleForm
            people={people}
            setPeople={setPeople}
            tamaleFilling={tamaleFilling}
            setTamaleFilling={setTamaleFilling}
            drink={drink}
            setDrink={setDrink}
          />
        </div>
        <div className="right">
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
          <DeliveryDateComponent
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
          />
          <DeliveryTimeComponent
            selectedTime={selectedTime}
            onTimeSelect={setSelectedTime}
          />
          <PriceCalculator
            tamaleFilling={tamaleFilling}
            people={people}
            onSubtotalChange={handleSubtotalChange} // This updates the subtotal
          />
          {/* Pass the subtotal to TotalCalculator */}
          <TotalCalculator
            subtotal={subtotal}
            deliveryFee={5.0}
            onTotalChange={handleTotalChange}
          />

          <div className="submit-btn">
            <button type="submit">Submit Order</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CateringOrderForm;
