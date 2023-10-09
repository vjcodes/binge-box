import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";
import PlanCard from "./PlanCard";

describe("Plan Card", () => {
  const data = {
    id: 1,
    title: "Premium",
    pricePerYear: "1499",
    noOfDevices: "4",
    resolution: "4k (Ultra HD) + HDR",
    videoQuality: "Best",
    supportedDevices: ["Tv", "computer", "mobile", "tablet"],
  };

  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <PlanCard {...data} />
        </Provider>
      </BrowserRouter>
    );
    const premiumPlanHeading = screen.getByText(data.title);
    expect(premiumPlanHeading).toBeInTheDocument();

    const planPrice = screen.getByText(data.pricePerYear);
    expect(planPrice).toBeInTheDocument();

    const resolution = screen.getByText(data.resolution);
    expect(resolution).toBeInTheDocument();

    const videoQuality = screen.getByText(data.videoQuality);
    expect(videoQuality).toBeInTheDocument();

    const supportedDevices = screen.getByText(`Tv, computer, mobile, tablet,`);
    expect(supportedDevices).toBeInTheDocument();

    const buyBtn = screen.getByRole("button", { name: "Buy Now" });
    expect(buyBtn).toBeInTheDocument();
  });
});
