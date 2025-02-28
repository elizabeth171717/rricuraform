import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ThankYouPage() {
  const location = useLocation();
  const customerName = location.state?.customerName || "Valued Customer"; // Default if no name is provided
  const email = location.state?.email || "your email"; // Default email

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://www.rricuratamales.com"; // Redirect after 5s
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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
