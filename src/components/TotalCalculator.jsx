import "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import PriceCalculator from "./PriceCalculator";
import DeliveryFee from "./DeliveryFee";
import TaxCalculator from "./TaxCalculator";

const TotalCalculator = ({ subtotal, deliveryFee, onTotalChange }) => {
  const taxRate = 0.08;
  const tax = subtotal > 0 ? subtotal * taxRate : 0;
  const total = subtotal > 0 ? subtotal + tax + deliveryFee : 0;

  // Use `useEffect` to update total in CateringOrderForm
  useEffect(() => {
    onTotalChange(total);
  }, [total, onTotalChange]);

  return (
    <div>
      {subtotal > 0 && (
        <>
          <TaxCalculator subtotal={subtotal} taxRate={taxRate} />
          <DeliveryFee deliveryFee={deliveryFee} />
          <PriceCalculator subtotal={subtotal} />
          <h3>Total Price: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

TotalCalculator.propTypes = {
  subtotal: PropTypes.number.isRequired,
  deliveryFee: PropTypes.number.isRequired, // ✅ Ensuring deliveryFee is passed correctly
  onTotalChange: PropTypes.func.isRequired,
};

export default TotalCalculator;
