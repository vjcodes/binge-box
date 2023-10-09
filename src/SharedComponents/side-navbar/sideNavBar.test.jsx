import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import userEvent from "@testing-library/user-event";
import SideNavbar from "./SideNavbar";
import { getSideNavItems } from "./constants";

describe("side nav bar", () => {
  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SideNavbar />
        </Provider>
      </BrowserRouter>
    );

    getSideNavItems().forEach((element) => {
      expect(screen.getByAltText(element.label)).toBeInTheDocument();
    });
  });
});
