import { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const PriceCalculator = ({ tamaleFilling, people, onSubtotalChange }) => {
  let pricePerPerson = 0;
  // Set the price based on the tamale filling
  switch (tamaleFilling) {
    case "ChickenBananaLeaf":
    case "PorkBananaLeaf":
      pricePerPerson = 15; // Price for Banana Leaf tamales
      break;
    case "ChickenCornHusk":
    case "PorkCornHusk":
    case "Rajas":
      pricePerPerson = 12; // Price for Corn Husk tamales
      break;
    case "Sweet":
      pricePerPerson = 10; // Price for Sweet tamales
      break;
    case "Vegan":
      pricePerPerson = 15; // Price for Vegan tamales
      break;
    default:
      pricePerPerson = 0; // No price if no filling is selected
  }

  const subtotal = pricePerPerson * people;

  // Use useEffect to call onSubtotalChange when the relevant props change
  useEffect(() => {
    if (onSubtotalChange) {
      onSubtotalChange(subtotal); // Pass the calculated subtotal back to the parent
    }
  }, [subtotal, onSubtotalChange]); // Dependency array includes subtotal and onSubtotalChange

  return (
    <div>
      {people > 0 && tamaleFilling && (
        <div>
          <p>Subtotal Price: ${subtotal.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

// PropTypes validation for the props
PriceCalculator.propTypes = {
  tamaleFilling: PropTypes.string.isRequired,

  people: PropTypes.number.isRequired,
  onSubtotalChange: PropTypes.func.isRequired, // should be a function, not a number
};

export default PriceCalculator;
