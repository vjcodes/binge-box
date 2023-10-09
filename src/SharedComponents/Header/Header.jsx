import { useEffect, useState } from "react";
import "./header.scss";
import logo from "./../../assets/signup/bingeBoxTitle.svg";
import notificationIcon from "./../../assets/header/notificationIcon.svg";
import profilePic from "./../../assets/header/profilePic.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { removeUser } from "../../store/slices/UserSlice";
import AccountsSection from "../accounts-container/AccountsSection";
import { allMovies } from "../../mockData";
import { getHeaderBtns } from "./constants";

const Header = ({ currentTab }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const data = useSelector((state) => {
    return state?.users;
  });

  const user = data[0];

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (item) => {
    setValue(item.title);
  };

  const filterMovies = () => {
    const arr = allMovies.filter((movie) => {
      const searchTerm = value.toLowerCase();
      const title = movie.title.toLowerCase();
      const genre = movie.genre.toLowerCase();

      return (
        searchTerm &&
        (title.startsWith(searchTerm) || genre.startsWith(searchTerm))
      );
    });

    navigate(`/search/${value}`, { state: { movies: arr, searchTerm: value } });
  };

  return (
    <div className="header-parent">
      <img src={logo} alt="logo" onClick={() => navigate("/home")} />

      <div className="header-btns-container">
        {getHeaderBtns(currentTab).map((btn) => (
          <div
            className={`header-btn ${btn.isActive && "red-bottom"}`}
            onClick={() => {
              btn.navigateTo && navigate(btn.navigateTo);
            }}
          >
            {btn.name}
          </div>
        ))}
      </div>

      <div className="search-container flex-row">
        <SearchOutlined
          onClick={() => {
            setValue(value);
            filterMovies();
          }}
        />
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search"
          className="in"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              // onSearch(value);
              filterMovies();
            }
          }}
        />

        <div className="search-dropdown">
          {allMovies
            .filter((movie) => {
              const searchTerm = value.toLowerCase();
              const title = movie.title.toLowerCase();
              const genre = movie.genre.toLowerCase();

              return (
                searchTerm &&
                (title.startsWith(searchTerm) ||
                  genre.startsWith(searchTerm)) &&
                title !== searchTerm
              );
            })
            .map((item) => (
              <div onClick={() => onSearch(item)} className="dropdown-row">
                {item.title}
              </div>
            ))}
        </div>
      </div>

      <div className="profile-section">
        <img src={notificationIcon} alt="notification" />
        <div className={`dropdown ${showProfileDropdown && "red-bottom"}`}>
          <img
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            src={profilePic}
            alt="profile"
            className="dropbtn"
          />

          <div
            class={`dropdown-content ${
              showProfileDropdown && "dropdown-content-active"
            }`}
          >
            <h4>{user?.name}</h4>

            <AccountsSection />

            <h4 onClick={() => navigate("/profile")}>
              <UserOutlined />
              Profile
            </h4>

            <button onClick={() => dispatch(removeUser())}>Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
