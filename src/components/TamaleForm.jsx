// TamaleForm.jsx
import "react";
import PropTypes from "prop-types";

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
    label: "2 Rajas tamale 'Pepper & Cheese'",
    img: rajastamale,
  },

  {
    value: "ChickenCornHusk",
    label: "2 Chicken Corn Husk tamale",
    img: chickentamale,
  },
  {
    value: "PorkCornHusk",
    label: "2 Pork Corn Husk tamale",
    img: cornporktamale,
  },
  {
    value: "ChickenBananaLeaf",
    label: "2 Chicken Banana Leaf tamale",
    img: bananaleafchicken,
  },
  {
    value: "PorkBananaLeaf",
    label: "2 Pork Banana Leaf tamale",
    img: bananaleafpork,
  },

  { value: "Sweet", label: "2 Red Sweet Tamale", img: sweet },
  {
    value: "Vegan",
    label: "2 Vegan tamale'Pepper, Cheese & vegan oil' ",
    img: vegantamale,
  },
];

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
          onChange={(e) => setPeople(Number(e.target.value))} // Convert to number
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

      {/* Tamale Selection (Now with images) */}
      <div className="tamalefilling">
        <h3>Choose Your Tamale:</h3>
        <div className="tamale-options">
          {tamaleOptions.map((tamale) => (
            <div
              key={tamale.value}
              className={`tamale-card ${
                tamaleFilling === tamale.value ? "selected" : ""
              }`}
              onClick={() => setTamaleFilling(tamale.value)}
            >
              <img src={tamale.img} alt={tamale.label} />
              <p>{tamale.label}</p>
            </div>
          ))}
        </div>
      </div>
      <br />

      {/* Step 3: Select Drinks */}
      {people > 0 && (
        <div>
          <h3>Choose {people} drinks</h3>
          <p>
            Choose between Coke, Diet Coke, Sprite, or Bottled Water. you can
            mix. WE will choose the drinks if left empty.
          </p>
          <br />
          <input
            type="text"
            placeholder="Type in drinks ex: 5 cokes and 5 sprites"
            value={drink}
            onChange={(e) => setDrink(e.target.value)}
          />
          <br />
        </div>
      )}
    </div>
  );
};

TamaleForm.propTypes = {
  people: PropTypes.number.isRequired,
  setPeople: PropTypes.func.isRequired,
  tamaleFilling: PropTypes.string.isRequired,
  setTamaleFilling: PropTypes.func.isRequired,
  drink: PropTypes.string,
  setDrink: PropTypes.func.isRequired,
};

export default TamaleForm;
