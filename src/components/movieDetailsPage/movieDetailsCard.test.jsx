import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import image2 from "./../../assets/images/image2.png";
import MovieDetailsCard from "./MovieDetailsCard";
import store from "../../store";

describe("Movie Details Card", () => {
  const cardData = {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    rating: 8.8,
    thumbnail: image2,
    totalTime: "2h 27m",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    trailerUrl: "https://www.youtube.com/watch?v=8hP9D6kZseM",
  };

  it("renders correctly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MovieDetailsCard details={cardData} setPlay={jest.fn()} />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByText(cardData.title)).toBeInTheDocument();
    expect(screen.getByText(cardData.genre)).toBeInTheDocument();
    expect(screen.getByText(cardData.releaseYear)).toBeInTheDocument();
    expect(screen.getByText(`Rating ${cardData.rating}`)).toBeInTheDocument();
    expect(screen.getByText(cardData.totalTime)).toBeInTheDocument();
    expect(screen.getByText(cardData.description)).toBeInTheDocument();
  });

  it("on click play", () => {
    const mockFn = jest.fn();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MovieDetailsCard details={cardData} setPlay={mockFn} />
        </Provider>
      </BrowserRouter>
    );

    const playBtn = screen.getByRole("button", { name: "Play" });
    const addBtn = screen.getByRole("button", { name: "+" });
    expect(playBtn).toBeInTheDocument();
    expect(addBtn).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.click(playBtn);
    });
    expect(mockFn).toBeCalled();
  });
});
