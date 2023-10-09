import { render, screen } from "@testing-library/react";
import SignupPage from "./SignupPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import userEvent from "@testing-library/user-event";

describe("Signup Page", () => {
  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SignupPage />
        </Provider>
      </BrowserRouter>
    );
    const pageTitle = screen.getAllByText("Sign Up")[0];
    expect(pageTitle).toBeInTheDocument();
  });

  it("all input fields and submit button are present", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SignupPage />
        </Provider>
      </BrowserRouter>
    );

    const nameField = screen.getByPlaceholderText("Name");
    const emailField = screen.getByPlaceholderText("Email ID");
    const mobileField = screen.getByPlaceholderText("Mobile no.");
    const passwordField = screen.getByPlaceholderText("Create Password");
    const confirmPasswordField =
      screen.getByPlaceholderText("Confirm Password");
    const privacyCheckbox = screen.getByRole("checkbox");
    const submitBtn = screen.getByRole("button", {
      name: /Sign Up/i,
    });

    expect(nameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(mobileField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(confirmPasswordField).toBeInTheDocument();
    expect(privacyCheckbox).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

    expect(submitBtn).toBeDisabled();
  });

  it("should allow users to enter details", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SignupPage />
        </Provider>
      </BrowserRouter>
    );
    const nameField = screen.getByPlaceholderText("Name");
    const emailField = screen.getByPlaceholderText("Email ID");
    const mobileField = screen.getByPlaceholderText("Mobile no.");
    const passwordField = screen.getByPlaceholderText("Create Password");
    const confirmPasswordField =
      screen.getByPlaceholderText("Confirm Password");
    const privacyCheckbox = screen.getByRole("checkbox");
    const submitBtn = screen.getByRole("button", {
      name: /Sign Up/i,
    });

    userEvent.type(nameField, "Vinayak");
    userEvent.type(emailField, "vinayak@gmail.com");
    userEvent.type(mobileField, "988755675");
    userEvent.type(passwordField, "Vin@123");
    userEvent.type(confirmPasswordField, "Vin@123");
    userEvent.click(privacyCheckbox);
    userEvent.click(submitBtn);
    expect(submitBtn).not.toBeDisabled();
  });
});
