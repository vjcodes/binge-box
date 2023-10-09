import React from "react";
import "./sideNavbar.scss";
import { useNavigate } from "react-router-dom";
import { getSideNavItems } from "./constants";

const SideNavbar = ({ activeTab }) => {
  const navigate = useNavigate();
  return (
    <div className="side-navbar-parent">
      <div className="icons-conatiner">
        {getSideNavItems().map((item) => (
          <div
            className="icon-label-container"
            onClick={() => {
              navigate(item.navigateTo);
            }}
          >
            <img
              src={item.isActive ? item.activeImage : item.image}
              alt={item.label}
            />
            <div
              className={`icon-label ${item.isActive ? "label-active" : ""}`}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNavbar;
