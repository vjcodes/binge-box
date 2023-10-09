import { useEffect } from "react";
import "./../signupPage.scss";
import bingeBoxTitle from "./../../../assets/signup/bingeBoxTitle.svg";
import PreferenceCardParent from "../../../components/preferenceCardParent/PreferenceCardParent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserPreferencePage = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => {
    return state?.users;
  });

  const user = data[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);
  return (
    <div className="signup-page-parent-container">
      <div className="plan-description">
        <img src={bingeBoxTitle} alt="Binge-box" />
        <PreferenceCardParent />
      </div>
    </div>
  );
};

export default UserPreferencePage;
