import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./bannerCarousel.scss";
import bvideo from "./../../../assets/homePage/bannerVideo.mp4";
import { sections } from "../../../mockData";
import { useSelector, useDispatch } from "react-redux";
import {
  addToWatchlist,
  removeFromWatchList,
} from "../../../store/slices/UserSlice";
import { CheckOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const BannerCarousel = () => {
  const [hover, setHover] = useState(false);
  const trendingMovies = sections.trending;

  const [isPlaying, setIsPlaying] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => {
    return state?.users;
  });

  const user = data[0];

  const isInWatchlist = (id) => {
    return user?.watchList.includes(id);
  };

  const handleMouseOver = (event) => {
    event.preventDefault();
    setIsPlaying(true);
  };

  const handleMouseOut = (event) => {
    event.preventDefault();
    setIsPlaying(false);
  };

  return (
    <div>
      <Carousel
        autoPlay={!isPlaying}
        interval={5000}
        showThumbs={false}
        infiniteLoop={true}
        width="100%"
        showStatus={false}
        data-testid="banner-carousel"
      >
        {trendingMovies.map((item) => (
          <div
            className="banner"
            onMouseEnter={(e) => setHover(true)}
            onMouseLeave={(e) => setHover(false)}
            data-testid="banner-card"
          >
            {!hover && <img src={item.thumbnail} alt="thumbnail" />}
            {hover && (
              <>
                <div className="banner-wrapper-main" data-testid="banner-wrapper">
                  <div className="about-banner-main">
                    <div className="banner-title">{item.title}</div>
                    <div>{item.description}</div>
                    <div className="banner-tags">
                      <button className="tags">{item.genre}</button>
                    </div>
                    <div className="banner-btns">
                      <button
                        className="play-btn"
                        onClick={() => {
                          navigate(`/description/${item.id}`, { state: item });
                        }}
                      >
                        Play
                      </button>
                      {!isInWatchlist(item.id) && (
                        <button
                          className="add-btn"
                          onClick={() => dispatch(addToWatchlist(item.id))}
                        >
                          +
                        </button>
                      )}
                      {isInWatchlist(item.id) && (
                        <button
                          className="add-btn"
                          onClick={() => {
                            dispatch(removeFromWatchList(item.id));
                          }}
                        >
                          <CheckOutlined />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <video
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  src={bvideo}
                  autoPlay={isPlaying || hover}
                ></video>
              </>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
