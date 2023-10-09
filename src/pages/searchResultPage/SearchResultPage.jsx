import React from "react";
import Header from "../../SharedComponents/Header/Header";
import { useLocation } from "react-router-dom";
import SideNavbar from "../../SharedComponents/side-navbar/SideNavbar";
import CarouselCard from "../../components/homePage/carouselCard/CarouselCard";
import "./searchResultsPage.scss";

const SearchResultPage = () => {
  const location = useLocation();
  return (
    <div>
      <Header currentTab="home" />
      <div className="search-page-parent-container">
        <SideNavbar />

        <div className="search-content">
          <h2>{`Results for "${location.state.searchTerm}"`}</h2>
          <div className="flex-row flex--wrap search-cards">
            {location.state.movies.map((item) => (
              <CarouselCard item={item} cardType="horizontal" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
