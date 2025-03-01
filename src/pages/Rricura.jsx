import { Link } from "react-router-dom";

import bulk from "../assets/bulk3.jpg";
import Logo from "../assets/logo.png";
import tamalebox from "../assets/sprite.jpg";

const Rricura = () => {
  return (
    <div className="main-container">
      <div className="heading">
        <img className="logo" src={Logo} />
        <h3>
          Our catering delivers the warmth and soul of true Mexican cuisine
        </h3>
      </div>
      <div className="links-to-form">
        {/* Link to the order form */}
        <Link to="/BulkOrderForm">
          <div className="box-container">
            <img src={bulk} />
            <div className="box-description">
              <h2>Order Tamales in Bulk</h2>
              <p>Order from 12 up to 1000 tamales or more</p>
            </div>
          </div>
        </Link>
        <br />
        <Link to="/CateringOrderForm">
          <div className="box-container">
            <img src={tamalebox} />
            <div className="box-description">
              <h2>Order Tamale Box</h2>
              <p>Each box contains 2 tamales plus drink and salsa verde</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Rricura;
