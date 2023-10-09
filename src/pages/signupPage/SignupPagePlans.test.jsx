import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import SignupPagePlans from "./SignupPagePlans";

describe("Signup Page Plans", () => {
  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SignupPagePlans />
        </Provider>
      </BrowserRouter>
    );
    const premiumPlan=screen.getByText("Premium")
    const superPlan=screen.getByText("Super")
    const mobilePlan=screen.getByText("Mobile")

    expect(premiumPlan).toBeInTheDocument()
    expect(superPlan).toBeInTheDocument()
    expect(mobilePlan).toBeInTheDocument()
  });
});
