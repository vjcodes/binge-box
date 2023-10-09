import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bvideo from "./../../assets/homePage/bannerVideo.mp4";
import "./watchlistCard.scss";
import { CaretRightOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { removeFromWatchList } from "../../store/slices/UserSlice";

const WatchListCard = ({ item, cardType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [hover, setHover] = useState(false);

  const navlink = `/description/${item.id}`;
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseOver = (event) => {
    event.preventDefault();
    setIsPlaying(true);
  };

  const handleMouseOut = (event) => {
    event.preventDefault();
    setIsPlaying(false);
  };

  return (
    <div
      className={`watch-carousel-card-container-${cardType}`}
      data-testid="watchlist-card-container"
      onMouseEnter={(e) => setHover(true)}
      onMouseLeave={(e) => setHover(false)}
    >
      {!hover && <img src={item.thumbnail} alt="thumbnail" />}
      {hover && (
        <>
          <div className={`banner-wrapper flex-column flex--space-between`}>
            <div className="watch-card-btns-container flex-row flex--justify-end">
              <button
                className="flex-row flex--justify-center flex--align-center"
                onClick={() => navigate(navlink, { state: item })}
                data-testid="watch-card-play-btn"
              >
                <CaretRightOutlined style={{ fontSize: "80%" }} />
              </button>
              <button
                className="flex-row flex--justify-center flex--align-center"
                onClick={() => dispatch(removeFromWatchList(item.id))}
                data-testid="watch-card-delete-btn"
              >
                <DeleteOutlined style={{ fontSize: "80%" }} />
              </button>
            </div>

            <div className="watch-card-details">
              <div className="movie-title">{item.title}</div>
              <div className="sub-labels flex-row flex--align-center">
                <div>{item?.releaseYear}</div>
                <div className="divider">|</div>
                <div>{item?.totalTime}</div>
                <div className="divider">|</div>
                <div>
                  <button className="tags">{item?.genre}</button>
                </div>
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
  );
};

export default WatchListCard;
