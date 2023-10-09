import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import store from "../../store";
import AccountsSection from "./AccountsSection";

describe("Accounts section", () => {
  it("renders correctly", () => {
    const mockFn = jest.fn();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AccountsSection
            setShowAddModal={mockFn}
            setShowEditModal={mockFn}
            setAccount={mockFn}
            editAccount={mockFn}
          />
        </Provider>
      </BrowserRouter>
    );
  });

  it("on click add btn", () => {
    const mockFn = jest.fn();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AccountsSection
            setShowAddModal={mockFn}
            setShowEditModal={mockFn}
            setAccount={mockFn}
            editAccount={mockFn}
          />
        </Provider>
      </BrowserRouter>
    );

    const addBtn = screen.getByRole("button", { name: "+" });
    expect(addBtn).toBeInTheDocument();

    userEvent.click(addBtn);
    expect(mockFn).toBeCalled();
  });
});
