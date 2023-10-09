import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import store from "../../store";
import AvatarIcon from "./AvatarIcon";

describe("Avatar Icon", () => {
  const account = {
    id: 1,
    name: "Rahul",
  };

  it("renders correctly", () => {
    const mockFn = jest.fn();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AvatarIcon
            account={account}
            setShowEditModal={mockFn}
            setAccount={mockFn}
            editAccount={true}
          />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByTestId("avatar-box")).toBeInTheDocument();
  });

  it("on click avatar", () => {
    const mockFn = jest.fn();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <AvatarIcon
            setShowAddModal={mockFn}
            setShowEditModal={mockFn}
            setAccount={mockFn}
            editAccount={true}
          />
        </Provider>
      </BrowserRouter>
    );

    const avatarBox = screen.getByTestId("avatar-box");
    expect(avatarBox).toBeInTheDocument();
    userEvent.click(avatarBox);
    expect(mockFn).toBeCalled();
  });
});
