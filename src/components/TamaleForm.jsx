// TamaleForm.jsx
import "react";
import PropTypes from "prop-types";

const TamaleForm = ({
  people,
  setPeople,
  tamaleFilling,
  setTamaleFilling,
  drink,
  setDrink,
}) => {
  return (
    <div>
      <div className="people">
        <h3>Number of people</h3>
        <select
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="6">6</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="75">75</option>
          <option value="100">100</option>
        </select>
      </div>
      <br />
      <div className="tamalefilling">
        <h3>Choose Your Tamale:</h3>
        <select
          value={tamaleFilling}
          onChange={(e) => setTamaleFilling(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="ChickenBananaLeaf">Chicken Banana Leaf</option>
          <option value="PorkBananaLeaf">Pork Banana Leaf</option>
          <option value="ChickenCornHusk">Chicken Corn Husk</option>
          <option value="PorkCornkHusk">Pork Corn Husk</option>
          <option value="Rajas">Rajas</option>
          <option value="Sweet">Sweet</option>
          <option value="Vegan">Vegan</option>
        </select>
      </div>
      <br />
      <div className="drink">
        <h3>Choose a Drink:</h3>
        <select
          value={drink}
          onChange={(e) => setDrink(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="Coke">Coke</option>
          <option value="DietCoke">Diet Coke</option>
          <option value="Sprite">Sprite</option>
          <option value="Bottled Water">Bottled Water</option>
        </select>
      </div>
    </div>
  );
};

TamaleForm.propTypes = {
  people: PropTypes.string.isRequired,
  setPeople: PropTypes.func.isRequired,
  tamaleFilling: PropTypes.string.isRequired,
  setTamaleFilling: PropTypes.func.isRequired,

  drink: PropTypes.string.isRequired,
  setDrink: PropTypes.func.isRequired,
};

export default TamaleForm;
