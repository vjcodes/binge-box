import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../../store/slices/UserSlice";
import ProfileCard from "./ProfileCard";
import userEvent from "@testing-library/user-event";

describe("Profile card", () => {
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
          userPreferences: [
            {
              id: 2,
              label: "Comedy",
              image: "/assets/genres/comedy.png",
            },
            {
              id: 1,
              label: "Horror & Thrillers",
              image: "/assets/genres/horror.png",
            },
          ],
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
          <ProfileCard />
        </Provider>
      </BrowserRouter>
    );

    expect(
      screen.getByText(`Email - ${customInitialState.users[0].email}`)
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Phone number - ${customInitialState.users[0].mobileno}`)
    ).toBeInTheDocument();
    customInitialState.users[0].userPreferences.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it("on clicking logout", () => {
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
          userPreferences: [
            {
              id: 2,
              label: "Comedy",
              image: "/assets/genres/comedy.png",
            },
            {
              id: 1,
              label: "Horror & Thrillers",
              image: "/assets/genres/horror.png",
            },
          ],
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
          <ProfileCard />
        </Provider>
      </BrowserRouter>
    );

    const logout = screen.getByRole("button", { name: "Logout" });
    userEvent.click(logout);
  });
});
