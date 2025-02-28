import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ThankYouPage() {
  const location = useLocation();
  const navigate = useNavigate(); // Import the navigate function
  const customerName = location.state?.customerName || "Valued Customer"; // Default if no name is provided
  const email = location.state?.email || "your email"; // Default email

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirect back to home or any other route within your app
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="thankYou-container">
      <h3>Gracias for Your Order, {customerName}!</h3>
      <p>
        We are processing your order and will contact you via {email} with the
        details.
      </p>
    </div>
  );
}

export default ThankYouPage;
