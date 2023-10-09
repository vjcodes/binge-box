import "./paymentCard.scss";
import InputField from "../../inputField/InputField";
import bank1 from "./../../../assets/signup/banks/bank1.svg";
import bank2 from "./../../../assets/signup/banks/bank2.svg";
import bank3 from "./../../../assets/signup/banks/bank3.svg";
import bank4 from "./../../../assets/signup/banks/bank4.svg";
import bank5 from "./../../../assets/signup/banks/bank5.svg";

const PaymentCard = (props) => {
  const upiAddresses = [
    { id: 1, label: "@oksbi" },
    { id: 2, label: "@okaxis" },
    { id: 3, label: "@ybl" },
    { id: 4, label: "@paytm" },
    { id: 5, label: "@upi" },
    { id: 6, label: "@apl" },
  ];

  const banks = [
    { id: 1, label: "HDFC", image: bank1, styleId: "bank-hdfc-btn" },
    { id: 2, label: "AXIS", image: bank2, styleId: "bank-axis-btn" },
    { id: 3, label: "SBI", image: bank3, styleId: "bank-sbi-btn" },
    { id: 4, label: "ICICI", image: bank4, styleId: "bank-icici-btn" },
    { id: 5, label: "IDBI", image: bank5, styleId: "bank-idbi-btn" },
  ];

  const onPaymentClick = () => {
    props.onPayment();
  };

  return (
    <>
      <div className="payment-card-container">
        <div className="price-display">
          <p id="user-amount-payable">Payment Amount</p>
          <h2>{`Rs. ${props?.details?.pricePerYear}`}</h2>
        </div>

        <>
          {props.type === "creditCard" && (
            <div className="credit-side-form">
              <form>
                <div className="input-up">
                  <label id="user-card-name-label">Name on Card</label>
                  <InputField id="user-card-name-field" placeholder="Name" />
                </div>
                <div className="input-up">
                  <label id="user-card-number-label">Card Number</label>
                  <InputField
                    id="user-card-number-field"
                    type="password"
                    placeholder="***** *****"
                  />
                </div>
                <div className="flex">
                  <div className="input-down">
                    <label id="user-card-expiry-label">Card Expiry</label>
                    <InputField
                      id="user-card-expiry-field"
                      type="date"
                      placeholder="***** *****"
                    />
                  </div>
                  <div className="input-down">
                    <label id="user-card-cvv-label">CVV</label>
                    <InputField id="user-card-cvv-field" type="number" />
                  </div>
                </div>
              </form>
              <div className="btn">
                <button
                  id="payment-screen-pay-now-btn"
                  onClick={onPaymentClick}
                  className="btn-pay"
                >
                  Pay Now
                </button>
              </div>
            </div>
          )}

          {props.type === "upi" && (
            <div className="credit-side-form">
              <form>
                <label id="user-upi-label">UPI</label>
                <InputField id="user-upi-field" placeholder="Enter UPI Id" />
                <div className="upi-labels flex">
                  {upiAddresses.map((upi) => (
                    <div className="upi-label">{upi.label}</div>
                  ))}
                </div>
              </form>
              <div className="btn">
                <button onClick={onPaymentClick} className="btn-pay">
                  Pay Now
                </button>
              </div>
            </div>
          )}

          {props.type === "netBanking" && (
            <div className="credit-side-form">
              <div className="bank-labels flex justify-content-space-betwwen">
                {banks.map((bank) => (
                  <button className="bank-btn">
                    <img src={bank.image} alt="bank" className="bank-img" />
                    <div>{bank.label}</div>
                  </button>
                ))}
                <div className="view-btn">
                  <button className="view-all-btn">{`>`}</button>
                  <div>View all</div>
                </div>
              </div>
              <div className="btn">
                <button onClick={onPaymentClick} className="btn-pay">
                  Pay Now
                </button>
              </div>
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default PaymentCard;
