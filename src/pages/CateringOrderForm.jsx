import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import TamaleForm from "../components/TamaleForm";
import PriceCalculator from "../components/PriceCalculator";
import TotalCalculator from "../components/TotalCalculator";
import { Link } from "react-router-dom";

import "../App.css";

const CateringOrderForm = () => {
  const [people, setPeople] = useState("");
  const [tamaleFilling, setTamaleFilling] = useState("");
  const [drink, setDrink] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate(); // Get the navigate function

  // This function updates the subtotal when PriceCalculator calculates it
  const handleSubtotalChange = (newSubtotal) => {
    setSubtotal(newSubtotal);
  };

  // This function updates the total when TotalCalculator calculates it
  const handleTotalChange = (calculatedTotal) => {
    setTotal(calculatedTotal);
  };

  // Function to handle navigation to checkout
  const handleCheckout = () => {
    const tax = subtotal * 0.08; // Calculate 8% tax
    const orderDetails = {
      orderType: "Combo Order",
      people,
      tamaleFilling,
      drink,
      subtotal,
      tax, // Include tax in order details
      deliveryFee: 5.0,
      total,
    };

    navigate("/CheckoutPage", { state: orderDetails }); // Use navigate like BulkOrderForm
  };

  return (
    <div className="order-form-container">
      <Link to="/" className="back-home">
        ⬅ Back to Home
      </Link>
      <div className="title-container">
        <h2>Tamale Box: 2 Tamales, drink & salsa verde</h2>
        <p>
          We require a 2-day notice for all orders. We do not deliver sundays!
        </p>
      </div>

      {/* No need for a form tag since we are not submitting */}
      <TamaleForm
        people={people}
        setPeople={setPeople}
        tamaleFilling={tamaleFilling}
        setTamaleFilling={setTamaleFilling}
        drink={drink}
        setDrink={setDrink}
      />
      <br />
      <PriceCalculator
        tamaleFilling={tamaleFilling}
        people={people}
        onSubtotalChange={handleSubtotalChange}
      />

      <TotalCalculator
        subtotal={subtotal}
        deliveryFee={5.0}
        onTotalChange={handleTotalChange}
      />

      {/* Button to go to checkout */}
      <button onClick={handleCheckout} className="checkout-button">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CateringOrderForm;
