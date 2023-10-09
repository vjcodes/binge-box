import "./planDescCard.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PlanDescriptionCard = (props) => {
  const navigate = useNavigate();

  const data = useSelector((state) => {
    return state.users;
  });

  const user = data[0];

  return (
    <div className="plan-desc-card-container">
      <h1 id="selected-plan-name">{props?.details?.title} Plan</h1>

      <p id="provided-user-name">
        {`Hi ${user?.name}, Here is your Subscription Plan Details!`}
      </p>

      <div id="selected-plan-validity">Validity: 1 June 2024</div>

      <div className="plan-desc-container">
        <div className="header-containers">
          <div className="header" id="price-label">
            Price
          </div>
          <div className="header" id="resolution-label">
            Resolution
          </div>
          <div className="header" id="video-quality-label">
            Video Quality
          </div>
          <div className="header" id="supported-devices-label">
            Supported Devices
          </div>
        </div>
        <div className="desc-values">
          <div className="value">{props?.details?.pricePerYear}</div>
          <div className="value">{props?.details?.resolution}</div>
          <div className="value">{props?.details?.videoQuality}</div>
          <div className="value">
            {props?.details?.supportedDevices.map((device) => `${device}, `)}
          </div>
        </div>
      </div>

      <div className="btn-containers">
        <button
          id="plan-detail-back-btn"
          className="btn back"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button
          id="proceed-to-pay-btn"
          className="btn pay"
          onClick={() => navigate("/signup/payment", { state: props.details })}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default PlanDescriptionCard;
