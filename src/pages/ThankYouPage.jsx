import { useEffect } from "react";

function ThankYouPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://www.rricuratamales.com"; // ✅ Correct way to redirect externally
    }, 5000);

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
