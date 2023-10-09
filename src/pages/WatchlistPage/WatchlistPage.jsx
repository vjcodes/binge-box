import React, { useEffect, useState } from "react";
import Header from "../../SharedComponents/Header/Header";
import SideNavbar from "../../SharedComponents/side-navbar/SideNavbar";
import { useSelector} from "react-redux";
import { allMovies } from "../../mockData";
import "./watchListPage.scss";
import WatchListCard from "../../components/watchListPage/WatchListCard";

const WatchlistPage = () => {

  const [watchListMovies, setWatchListMovies] = useState([]);

  const data = useSelector((state) => {
    return state?.users;
  });

  const user = data[0];

  useEffect(() => {
    getFilteredList();
  }, [user]);

  const getFilteredList = () => {
    let movies = [];
    user?.watchList.forEach((item) => {
      allMovies.forEach((movie) => {
        if (movie.id === item) {
          movies.push(movie);
        }
      });
    });

    setWatchListMovies(movies);
  };

  return (
    <div>
      <Header currentTab="home" />
      <div>
        <SideNavbar activeTab="watchlist" />
        <h3 className="watchlist-heading">My Watchlist</h3>
        <div className="watch-cards-container flex-row flex--wrap">
          {watchListMovies.map((item) => (
            <WatchListCard item={item} cardType="horizontal" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchlistPage;
