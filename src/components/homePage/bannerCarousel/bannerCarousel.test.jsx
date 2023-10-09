import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";
import userEvent from "@testing-library/user-event";
import BannerCarousel from "./BannerCarousel";
import { sections } from "../../../mockData";

describe("Banner Carousel", () => {
  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <BannerCarousel />
        </Provider>
      </BrowserRouter>
    );

    const bannerCard = screen.getAllByTestId("banner-card")[0];
    expect(bannerCard).toBeInTheDocument();
    expect(screen.getAllByAltText("thumbnail")[0]).toBeInTheDocument();
  });

  it("renders details on hover correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <BannerCarousel />
        </Provider>
      </BrowserRouter>
    );

    const bannerCard = screen.getAllByTestId("banner-card")[0];
    expect(bannerCard).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.hover(bannerCard);
    });
    expect(
      screen.getAllByRole("button", { name: "Play" })[0]
    ).toBeInTheDocument();
    expect(screen.getAllByTestId("banner-wrapper")[0]).toBeInTheDocument();
    expect(screen.getAllByTestId("banner-wrapper")).toHaveLength(8);

    expect(
      screen.getAllByText(sections.trending[0].description)[0]
    ).toBeInTheDocument();
  });
});
