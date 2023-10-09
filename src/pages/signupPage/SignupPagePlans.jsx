import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./signupPage.scss";
import bingeBoxTitle from "../../assets/signup/bingeBoxTitle.svg";
import unleashSideImg from "../../assets/signup/unleashSideImg.svg";
import PlanCard from "../../SharedComponents/signup-page/plan-card/PlanCard";

const SignupPagePlans = () => {
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
  
  const plans = [
    {
      id: 1,
      title: "Premium",
      pricePerYear: "1499",
      noOfDevices: "4",
      resolution: "4k (Ultra HD) + HDR",
      videoQuality: "Best",
      supportedDevices: ["Tv", "computer", "mobile", "tablet"],
    },
    {
      id: 2,
      title: "Super",
      pricePerYear: "899",
      noOfDevices: "4",
      resolution: "1080p",
      videoQuality: "Better",
      supportedDevices: ["Tv", "computer", "mobile", "tablet"],
    },
    {
      id: 3,
      title: "Mobile",
      pricePerYear: "499",
      noOfDevices: "4",
      resolution: "480p",
      videoQuality: "Good",
      supportedDevices: ["Mobile", "tablet"],
    },
  ];

  return (
    <div className="signup-page-parent-container">
      <div className="sign-up-plans-page">
        <div className="sign-up-plans-side-container">
          <div>
            <img src={bingeBoxTitle} alt="Binge-box" />
          </div>

          <div>
            <img src={unleashSideImg} alt="Binge-box" id="plan-side-img" />
          </div>

          <h2>Subscription Plans for Endless Streaming Delight!"</h2>
        </div>

        <div className="sign-up-plans-card-container">
          {plans.map((plan) => (
            <PlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignupPagePlans;
