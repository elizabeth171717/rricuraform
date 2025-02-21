import "react";
import { useEffect } from "react";

function ThankYouPage() {
  useEffect(() => {
    // Set a timeout to redirect after 5 seconds
    const timer = setTimeout(() => {
      window.location.href = "https://www.rricuratamales.com"; // ✅ Redirect to your website
    }, 5000);

    // Clear the timeout if the component unmounts before redirecting
    return () => clearTimeout(timer);
  }, []);

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
