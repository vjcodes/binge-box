import { useEffect } from "react";
import "./signupPage.scss";
import bingeBoxTitle from "../../assets/signup/bingeBoxTitle.svg";
import PlanDescriptionCard from "../../SharedComponents/signup-page/plan-description-card/PlanDescriptionCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SignupPagePlanDesc = () => {
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

  return (
    <div className="signup-page-parent-container">
      <div className="plan-description">
        <img src={bingeBoxTitle} alt="Binge-box" />
        <PlanDescriptionCard details={location.state} />
      </div>
    </div>
  );
};

export default SignupPagePlanDesc;
