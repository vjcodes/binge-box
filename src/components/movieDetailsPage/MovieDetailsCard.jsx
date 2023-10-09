import React from "react";
import "./movieDetailsCard.scss";
import { CheckOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWatchlist,
  removeFromWatchList,
} from "../../store/slices/UserSlice";

const MovieDetailsCard = ({ details, setPlay }) => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state?.users;
  });

  const user = data[0];

  const isInWatchlist = user?.watchList.includes(details?.id);

  return (
    <div className="movie-details-container">
      <div className="title-container flex-row flex--align-center flex--space-between">
        <div className="title-labels">
          <h3>{details?.title}</h3>
          <div className="sub-labels flex-row flex--align-center">
            <div>{details?.releaseYear}</div>
            <div className="divider">|</div>
            <div>{details?.totalTime}</div>
            <div className="divider">|</div>
            <div>Rating {details?.rating}</div>
          </div>
        </div>

        <div className="banner-btns">
          <button className="play-btn" onClick={() => setPlay(true)}>
            Play
          </button>
          {!isInWatchlist && (
            <button
              className="add-btn"
              onClick={() => dispatch(addToWatchlist(details.id))}
            >
              +
            </button>
          )}
          {isInWatchlist && (
            <button
              className="add-btn"
              onClick={() => {
                dispatch(removeFromWatchList(details.id));
              }}
            >
              <CheckOutlined />
            </button>
          )}
        </div>
      </div>

      <div className="banner-tags">
        <button className="tags">{details?.genre}</button>
      </div>

      <div className="description">{details?.description}</div>
    </div>
  );
};

export default MovieDetailsCard;
