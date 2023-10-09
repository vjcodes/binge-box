import React from "react";
import "./Modal.scss";
import tick from "./../../assets/signup/tick.svg";

const Modal = () => {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <img src={tick} alt="tick" />
        <div className="header-text">Congratulations</div>
        <div>Payment Done Successfully! </div>
      </div>
    </>
  );
};

export default Modal;
