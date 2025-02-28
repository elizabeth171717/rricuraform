import "react";

const DeliveryFee = () => {
  const deliveryFee = 5.0; // Flat delivery fee

  return (
    <div>
      <p>Delivery Fee: ${deliveryFee.toFixed(2)}</p>
    </div>
  );
};

export default DeliveryFee;
