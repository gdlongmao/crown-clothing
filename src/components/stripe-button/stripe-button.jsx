import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HgQHOALNT4ZqHpLXRFbQ4vHYo9dcAKPbrpbW4okB5sN0auRExtXYBNl75mpInuj1Lm1N8bZ0qNJVaGqR9PBHC7F00FCEq6YS9"

    const onToken = token => {
        console.log(token);
        alert("Payment Successful");
    }

    return (
        <StripeCheckout 
          label="Pay Now"
          name="CROWN Clothing Ltd."
          billingAddress
          shippingAddress
          image="https://svgshare.com/i/CUz.svg"
          description={`Your total is $${price}`}
          amount={priceForStripe}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;