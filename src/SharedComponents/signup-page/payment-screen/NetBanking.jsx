import React from "react";
import PaymentCard from "./PaymentCard";

const NetBanking = (props) => {
  return (
    <div>
      <PaymentCard
        type="netBanking"
        details={props.details}
        onPayment={props.onPayment}
      />
    </div>
  );
};

export default NetBanking;
