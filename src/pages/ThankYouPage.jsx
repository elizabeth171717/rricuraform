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
      <h1>Gracias for Your Order!</h1>
      <h3>
        We are processing your order and will contact you for further details.
      </h3>
    </div>
  );
}

export default ThankYouPage;
