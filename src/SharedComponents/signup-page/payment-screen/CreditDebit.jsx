import React from "react";
import PaymentCard from "./PaymentCard";

const CreditDebit = (props) => {
  return (
    <PaymentCard
      type="creditCard"
      details={props.details}
      onPayment={props.onPayment}
    />
  );
};

export default CreditDebit;
