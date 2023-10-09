export const getHeaderBtns = (currentTab) => {
  return [
    {
      id: 1,
      name: "Home",
      styleId: "home",
      navigateTo: "/home",
      isActive: currentTab === "home",
    },
    {
      id: 2,
      name: "Movies",
      styleId: "movies-link",
      navigateTo: "/movies",
      isActive: currentTab === "movies",
    },
    {
      id: 3,
      name: "Series",
      styleId: "series-link",
      isActive: currentTab === "series",
    },
    {
      id: 4,
      name: "TV Shows",
      styleId: "tv-shows-link",
      isActive: currentTab === "tvshows",
    },
    {
      id: 5,
      name: "Anime",
      styleId: "anime-link",
      isActive: currentTab === "anime",
    },
    {
      id: 6,
      name: "Categories",
      styleId: "categories-modal-container",
      isActive: currentTab === "categories",
    },
  ];
};
