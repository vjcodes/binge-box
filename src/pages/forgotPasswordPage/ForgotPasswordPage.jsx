import React, { useState } from "react";
import bingeBoxTitle from "../../assets/signup/bingeBoxTitle.svg";
import "./forgotPwdPage.scss";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [forgotStates, setForgotStates] = useState({
    emailEntered: false,
    otpVerified: false,
    passwordReset: false,
  });

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;

    // Check if the input is a single digit (0-9)
    if (/^\d$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  return (
    <div className="forgot-pwd-page-parent-container">
      <div className="forgot-pwd-page-sub-container flex-column flex--justify-center flex--align-center">
        <img src={bingeBoxTitle} alt="title" />

        {!forgotStates.emailEntered && (
          <div className="forgot-pwd-email-container">
            <div className="flex-row top-section ">
              <button onClick={() => navigate("/sign-in")}>{`< Back`}</button>
              <div className="headings">
                <h3>Forgot Your Password?</h3>
                <div>Enter your email below</div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setForgotStates({
                      ...forgotStates,
                      emailEntered: true,
                    });
                  }}
                >
                  <input type="email" required placeholder="Email ID" />
                  <button>Request OTP</button>
                </form>
              </div>
            </div>
          </div>
        )}

        {forgotStates.emailEntered && !forgotStates.otpVerified && (
          <div className="forgot-pwd-email-container">
            <div className="flex-row top-section ">
              <button
                onClick={() =>
                  setForgotStates({
                    ...forgotStates,
                    emailEntered: false,
                  })
                }
              >{`< Back`}</button>

              <div className="headings">
                <h3>Verification</h3>
                <div>Enter the OTP</div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setForgotStates({
                      ...forgotStates,
                      otpVerified: true,
                    });
                  }}
                >
                  <div className="otp-section flex-row">
                    <input
                      type="text"
                      value={value}
                      onChange={handleChange}
                      maxLength="1"
                      required
                    />
                    <input
                      type="text"
                      value={value}
                      onChange={handleChange}
                      maxLength="1"
                      required
                    />
                    <input
                      type="text"
                      value={value}
                      onChange={handleChange}
                      maxLength="1"
                      required
                    />
                    <input
                      type="text"
                      value={value}
                      onChange={handleChange}
                      maxLength="1"
                      required
                    />
                  </div>
                  <button>Verify</button>
                  <div className="resend-otp">Resend OTP</div>
                </form>
              </div>
            </div>
          </div>
        )}

        {forgotStates.emailEntered && forgotStates.otpVerified && (
          <div className="forgot-pwd-email-container">
            <div className="flex-row top-section ">
              <button
                onClick={() =>
                  setForgotStates({
                    ...forgotStates,
                    otpVerified: false,
                  })
                }
              >{`< Back`}</button>

              <div className="headings">
                <h3>Reset Password</h3>
                <div>Enter your new password</div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    navigate(-1);
                  }}
                >
                  <div>
                    <input
                      type="password"
                      placeholder="New Password"
                      required
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                  <button>Reset Password</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
