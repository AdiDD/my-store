import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_KY5tTgFWt9CV5Y4vrJskdOsf00elJgjuYt";

  const onToken = (token) => {
    console.log(token);
    alert("Payment sucessful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="My store Ltd"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
