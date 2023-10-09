import home from "./../../assets/sideNavbar/home.svg";
import homeActive from "./../../assets/sideNavbar/homeActive.svg";
import plus from "./../../assets/sideNavbar/plus.svg";
import plusActive from "./../../assets/sideNavbar/plusActive.svg";
import profile from "./../../assets/sideNavbar/profile.svg";
import profileActive from "./../../assets/sideNavbar/profileActive.svg";

export const getSideNavItems = (activeTab) => {
  return [
    {
      id: 1,
      label: "Home",
      image: home,
      activeImage: homeActive,
      isActive: activeTab === "home",
      navigateTo: "/home",
    },
    {
      id: 2,
      label: "Watchlist",
      image: plus,
      activeImage: plusActive,
      isActive: activeTab === "watchlist",
      navigateTo: "/watchlist",
    },
    {
      id: 3,
      label: "Profile",
      image: profile,
      activeImage: profileActive,
      isActive: activeTab === "profile",
      navigateTo: "/profile",
    },
  ];
};
