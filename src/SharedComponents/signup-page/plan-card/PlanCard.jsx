import "./planCard.scss";
import { useNavigate } from "react-router-dom";

const PlanCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="plan-card-container"
      onClick={() => {
        navigate("/signup/plans/details", { state: props });
      }}
    >
      <h2 id="subscription-plan-name">{props.title}</h2>

      <div className="value-container">
        <div id="subscription-plan-price">
          Rs.<span id="price">{props.pricePerYear}</span>/yr
        </div>
        <div>{`${props.noOfDevices} device`}</div>
      </div>

      <div className="value-container" id="subscription-plan-resolution">
        <div className="value-headers">Resolution</div>
        {props.resolution}
      </div>

      <div className="divider"></div>

      <div className="value-container" id="subscription-plan-quality">
        <div className="value-headers">Video Quality</div>
        {props.videoQuality}
      </div>

      <div className="divider"></div>

      <div className="value-container" id="subscription-plan-supported-devices">
        <div className="value-headers">Supported Devices</div>
        {props.supportedDevices.map((device) => `${device}, `)}
      </div>

      <button id="subscription-plan-buy-now-btn">Buy Now</button>
    </div>
  );
};

export default PlanCard;
