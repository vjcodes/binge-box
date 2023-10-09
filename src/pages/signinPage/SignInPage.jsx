import "./signinPage.scss";
import bingeBoxTitle from "../../assets/signup/bingeBoxTitle.svg";
import googleLogo from "../../assets/signin/googleLogo.svg";
import appleLogo from "../../assets/signin/appleLogo.svg";
import { Divider } from "antd";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  return (
    <div className="sign-in-page-parent-container">
      <div className="sign-in-page-sub-container">
        <img src={bingeBoxTitle} alt="title" />
        <div className="login-form-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <h3>Login</h3>
            <input type="email" required placeholder="Enter email" />
            <div
              className="forgot-pwd"
              onClick={(e) => {
                e.preventDefault();
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </div>
            <input type="password" required placeholder="Enter password" />
            <div className="flex">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>

            <button className="login-btn" onClick={() => navigate("/home")}>
              Login
            </button>
          </form>

          <div className="sign-up-link">
            Doesn’t have an account ?{" "}
            <span
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </span>
          </div>

          <Divider className="divider">Or Login with</Divider>

          <div className="social-login-container">
            <button className="social-btn">
              <img src={googleLogo} alt="google" className="social-img" />
              Google
            </button>
            <button className="social-btn">
              <img src={appleLogo} alt="apple" className="social-img" />
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
