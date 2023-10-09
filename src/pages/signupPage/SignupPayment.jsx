import "./signupPage.scss";
import bingeBoxTitle from "../../assets/signup/bingeBoxTitle.svg";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentParent from "../../SharedComponents/signup-page/payment-screen/PaymentParent";
import Modal from "../../SharedComponents/ModalComponent/Modal";

const SignupPayment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = useSelector((state) => {
    return state?.users;
  });

  const user = data[0];

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showModal, setShowModal] = useState(false);
  const onPayment = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      navigate("/user-preference ");
    }, 2000);
  };

  return (
    <div className="signup-page-parent-container">
      <div className="plan-description">
        {!showModal && (
          <div className="payment-method-screen">
            <img src={bingeBoxTitle} alt="Binge-box" />
            <h2 id="payment-mode">Choose the mode of payment</h2>
            <PaymentParent details={location.state} onPayment={onPayment} />
          </div>
        )}

        {showModal && <Modal />}
      </div>
    </div>
  );
};

export default SignupPayment;
