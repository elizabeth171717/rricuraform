import "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ThankYouPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout to redirect after 3 seconds
    const timer = setTimeout(() => {
      navigate("/"); // Adjust to your form route
    }, 3000);

    // Clear the timeout if the component is unmounted before 3 seconds
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>Gracias for Your Order!</h1>
      <p>
        We are processing your order and will contact you for further details.
      </p>
    </div>
  );
}

export default ThankYouPage;
