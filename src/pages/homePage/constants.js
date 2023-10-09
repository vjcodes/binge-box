import { sections } from "../../mockData";

export const responsiveHorizontalCard = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const responsiveVerticalCard = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const homeSections = [
  {
    id: 1,
    label: "Top movies for you",
    data: sections.topMoviesForYou,
  },
  {
    id: 2,
    label: "Recent Releases",
    data: sections.recentReleases,
  },
  {
    id: 3,
    label: "Your Watches",
    data: sections.yourWatches,
  },
  {
    id: 4,
    label: "Trending Movies",
    data: sections.topMoviesForYou,
  },
  {
    id: 5,
    label: "Top Rated",
    data: sections.topRated,
  },
];
