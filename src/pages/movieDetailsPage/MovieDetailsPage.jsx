import React, { useState, useEffect } from "react";
import "./movieDetailsPage.scss";
import Header from "../../SharedComponents/Header/Header";
import SideNavbar from "../../SharedComponents/side-navbar/SideNavbar";
import MovieDetailsCard from "../../components/movieDetailsPage/MovieDetailsCard";
import { useLocation } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import { allMovies } from "../../mockData";
import CarouselCard from "../../components/homePage/carouselCard/CarouselCard";
import { responsiveHorizontalCard } from "../homePage/constants";
import Carousel from "react-multi-carousel";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import bgVideo from "./../../assets/homePage/bannerVideo.mp4";

const MovieDetailsPage = () => {
  const location = useLocation();
  const details = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [play, setPlay] = useState(false);

  const getRelatedMovies = () => {
    return allMovies.filter((movie) => movie.genre === details.genre);
  };
  return (
    <div>
      <Header currentTab="home" />
      <div>
        <SideNavbar activeTab="home" />
        <div className="movie-details-parent-container flex-column flex--justify-center flex--align-center">
          {!play && (
            <>
              <MovieDetailsCard details={details} setPlay={setPlay} />

              <h4>More like this</h4>

              <Carousel
                containerClass="carousel-container"
                responsive={responsiveHorizontalCard}
              >
                {getRelatedMovies().map((item) => (
                  <CarouselCard item={item} cardType="horizontal" />
                ))}
              </Carousel>
            </>
          )}

          {play && (
            <div className="flex-row vid-parent flex--space-between">
              <button onClick={() => setPlay(false)}>{`< Back`}</button>
              <div className="video-container">
                <Video
                  autoPlay
                  loop
                  muted
                  controls={[
                    "PlayPause",
                    "Seek",
                    "Time",
                    "Volume",
                    "Fullscreen",
                  ]}
                  poster="http://sourceposter.jpg"
                  onCanPlayThrough={() => {
                    // Do stuff
                  }}
                  className="video"
                >
                  <source src={bgVideo} type="video/webm" />
                  <track
                    label="English"
                    kind="subtitles"
                    srcLang="en"
                    src="http://source.vtt"
                    default
                  />
                </Video>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
