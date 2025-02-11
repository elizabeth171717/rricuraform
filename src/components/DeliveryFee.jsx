import "react";

const DeliveryFee = () => {
  const deliveryFee = 5.0; // Flat delivery fee

  return (
    <div>
      <h3>Delivery Fee: ${deliveryFee.toFixed(2)}</h3>
    </div>
  );
};

export default DeliveryFee;
