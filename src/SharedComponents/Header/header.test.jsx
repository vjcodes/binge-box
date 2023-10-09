import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import Header from "./Header";
import { getHeaderBtns } from "./constants";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../../store/slices/UserSlice";

describe("Header", () => {
  it("renders correctly", () => {
    // Create a custom initial state
    const customInitialState = {
      users: [
        {
          name: "Vinayak",
          email: "vinajaiswal@deloitte.com",
          mobileno: "348239847",
          password: "Vinayak@8932",
          confirmPassword: "Vinayak@8932",
          privacy: true,
          accounts: [],
          watchList: [],
          userPreferences: [],
        },
      ],
    };

    const customStore = configureStore({
      reducer: {
        users: userSlice.reducer,
      },
      preloadedState: customInitialState, // Provide the custom initial state
    });

    render(
      <BrowserRouter>
        <Provider store={customStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    getHeaderBtns().forEach((element) => {
      expect(screen.getByText(element.name)).toBeInTheDocument();
    });
  });

  it("on search", () => {
    // Create a custom initial state
    const customInitialState = {
      users: [
        {
          name: "Vinayak",
          email: "vinajaiswal@deloitte.com",
          mobileno: "348239847",
          password: "Vinayak@8932",
          confirmPassword: "Vinayak@8932",
          privacy: true,
          accounts: [],
          watchList: [],
          userPreferences: [],
        },
      ],
    };

    const customStore = configureStore({
      reducer: {
        users: userSlice.reducer,
      },
      preloadedState: customInitialState, // Provide the custom initial state
    });
    render(
      <BrowserRouter>
        <Provider store={customStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const searchField = screen.getByPlaceholderText("Search");
    expect(searchField).toBeInTheDocument();
    fireEvent.change(searchField, { target: { value: "Incep" } });

    expect(screen.getAllByText("Inception")).toHaveLength(1);
  });
});
