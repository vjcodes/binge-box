import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";
import AddAccountModal from "./AddAccountModal";
import { userSlice } from "../../../store/slices/UserSlice";

describe("Add/Edit Account Modal", () => {
  const account = {
    id: "372304f2-3047-469c-989f-bda4eacac090",
    name: "Rahul",
    language: "English",
    genres: "Romantic",
  };

  const mockFn = jest.fn();

  it("renders add modal correctly", () => {
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
          <AddAccountModal
            setShowModal={mockFn}
            setShowEditModal={mockFn}
            type="add"
          />
        </Provider>
      </BrowserRouter>
    );

    const nameField = screen.getByPlaceholderText("Name");
    const languageField = screen.getByDisplayValue("Language");
    const genreField = screen.getByDisplayValue("Genre");
    expect(nameField).toBeInTheDocument();
    expect(languageField).toBeInTheDocument();
    expect(genreField).toBeInTheDocument();

    fireEvent.change(nameField, { target: { value: "Manish" } });
    fireEvent.change(languageField, { target: { value: "English" } });
    fireEvent.change(genreField, { target: { value: "Comedy" } });

    const addBtn = screen.getByRole("button", { name: "Add Account" });
    userEvent.click(addBtn);

    expect(mockFn).toBeCalled();
  });

  it("renders edit modal correctly", () => {
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
          <AddAccountModal
            setShowModal={mockFn}
            setShowEditModal={mockFn}
            type="edit"
            account={account}
          />
        </Provider>
      </BrowserRouter>
    );

    const nameField = screen.getByDisplayValue(account.name);
    const languageField = screen.getByDisplayValue(account.language);
    const genreField = screen.getByDisplayValue(account.genres);
    expect(nameField).toBeInTheDocument();
    expect(languageField).toBeInTheDocument();
    expect(genreField).toBeInTheDocument();

    const saveBtn = screen.getByRole("button", { name: "Save" });
    userEvent.click(saveBtn);

    expect(mockFn).toBeCalled();
  });
});
