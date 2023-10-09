import "./signupPage.scss";
import bingeBoxTitle from "../../assets/signup/bingeBoxTitle.svg";
import InputField from "../../SharedComponents/inputField/InputField";
import sideTitle from "../../assets/signup/sideTitle.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slices/UserSlice";

const SignupPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    email: "",
    mobileno: "",
    password: "",
    confirmPassword: "",
    privacy: false,
    accounts: [],
    watchList: [],
    userPreferences: [],
  });

  const inputItems = [
    {
      id: 1,
      type: "text",
      name: "name",
      placeholder: "Name",
      errorMessage:
        "name should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
      styleId: "user-name",
    },
    {
      id: 2,
      type: "email",
      name: "email",
      placeholder: "Email ID",
      errorMessage: "It should be a valid email address!",
      required: true,
      styleId: "user-email",
    },
    {
      id: 3,
      type: "number",
      name: "mobileno",
      placeholder: "Mobile no.",
      required: true,
      styleId: "user-mobile",
    },
    {
      id: 4,
      type: "password",
      name: "password",
      placeholder: "Create Password",
      required: true,
      errorMessage:
        "Password should be 8-20 characters and it should include atleast 1 letter,1 number and 1 special character and should not start with special character!",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      styleId: "user-pass",
    },
    {
      id: 5,
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
      required: true,
      errorMessage: "Passwords don't match!",
      pattern: values.password,
      styleId: "user-cfm-pass",
    },
    {
      id: 6,
      type: "checkbox",
      name: "privacy",
      label: "By signing up, you agree to our privacy policy",
      required: true,
      styleId: "user-consent",
    },
  ];

  const isDisabled = () => {
    if (
      !values.name ||
      !values.email ||
      !values.mobileno ||
      !values.password ||
      !values.confirmPassword ||
      !values.privacy
    ) {
      return true;
    }

    return false;
  };

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewUser(values);
    navigate("/signup/plans");
  };

  const onChange = (e) => {
    if (e.target.checked) {
      setValues({
        ...values,
        [e.target.name]: e.target.checked,
      });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
        privacy: false,
      });
    }
  };

  return (
    <div className="signup-page-parent-container">
      <div className="sign-up-page-form">
        <div className="sign-up-form-container">
          <img src={bingeBoxTitle} alt="Binge-box" />
          <h2 id="sign-up-heading">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {inputItems.map((input) => (
              <InputField
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button disabled={isDisabled()}>Sign Up</button>
          </form>
        </div>

        <div className="sign-up-side-container" id="sign-up-text-banner">
          <img src={sideTitle} alt="enjoy" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
