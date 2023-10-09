import PaymentCard from "./PaymentCard";

const Upi = (props) => {
  return (
    <div>
      <PaymentCard
        type="upi"
        details={props.details}
        onPayment={props.onPayment}
      />
    </div>
  );
};

export default Upi;
