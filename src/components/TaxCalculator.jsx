import "react";
import PropTypes from "prop-types"; // Add PropTypes for validation

const TaxCalculator = ({ subtotal }) => {
  const taxRate = 0.08; // 8% tax
  const tax = subtotal * taxRate;

  return (
    <div>
      <h3>Tax (8%): ${tax.toFixed(2)}</h3>
    </div>
  );
};

// ✅ Add PropTypes validation for subtotal
TaxCalculator.propTypes = {
  subtotal: PropTypes.number.isRequired,
};

export default TaxCalculator;
