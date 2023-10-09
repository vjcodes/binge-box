import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import store from "../../store";
import PreferenceCardParent from "./PreferenceCardParent";
import { preferences } from "./constants";

describe("Preferences Card", () => {
  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <PreferenceCardParent />
        </Provider>
      </BrowserRouter>
    );

    preferences.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });

    expect(screen.getAllByTestId("pref-card")).toHaveLength(9);
  });

  it("on clicking on a preference", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <PreferenceCardParent />
        </Provider>
      </BrowserRouter>
    );

    const prefCard = screen.getAllByTestId("pref-card")[0];
    userEvent.click(prefCard);
  });
});
