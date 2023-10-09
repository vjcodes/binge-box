import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import image2 from "../../assets/images/image2.png";
import WatchListCard from "./WatchListCard";
import store from "../../store";

describe("Watchlist card", () => {
  const item = {
    id: 8,
    title: "Forrest Gump",
    genre: "Drama",
    releaseYear: 1994,
    rating: 8.8,
    thumbnail: image2,
    totalTime: "2h 27m",
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
    trailerUrl: "https://www.youtube.com/watch?v=bLvqoHBptjg",
  };

  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <WatchListCard item={item} cardType="horizontal" />
        </Provider>
      </BrowserRouter>
    );

    const cardContainer = screen.getByTestId("watchlist-card-container");
    expect(cardContainer).toBeInTheDocument();

    expect(screen.getByAltText("thumbnail")).toBeInTheDocument();
  });

  it("show movie data on hovering card", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <WatchListCard item={item} cardType="horizontal" />
        </Provider>
      </BrowserRouter>
    );
    const cardContainer = screen.getByTestId("watchlist-card-container");
    expect(cardContainer).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.hover(cardContainer);
    });

    const movieTitle = screen.getByText(item.title);
    expect(movieTitle).toBeInTheDocument();

    const movieGenre = screen.getByText(item.genre);
    expect(movieGenre).toBeInTheDocument();

    const movieYear = screen.getByText(item.releaseYear);
    expect(movieYear).toBeInTheDocument();

    const movieTime = screen.getByText(item.totalTime);
    expect(movieTime).toBeInTheDocument();

    const playBtn = screen.getByTestId("watch-card-play-btn");
    expect(playBtn).toBeInTheDocument();

    const delBtn = screen.getByTestId("watch-card-delete-btn");
    expect(delBtn).toBeInTheDocument();
  });
});
