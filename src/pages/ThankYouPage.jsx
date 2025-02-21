import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ThankYouPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("https://www.rricuratamales.com"); // ✅ Redirect using useNavigate
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="thankYou-container">
      <h3>Gracias for Your Order!</h3>
      <p>
        We are processing your order and will contact you for further details.
      </p>
    </div>
  );
}

export default ThankYouPage;
