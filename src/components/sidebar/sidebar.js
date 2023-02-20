import "./style.css";
import { useLocation, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useSelector, useDispatch } from "react-redux";

function Sidebar() {
  const currentRoute = useLocation().pathname.toLowerCase();
  const sidebarOpen = useSelector((state) => state.sidebarOpenState);

  

  // console.log(currentRoute);

  

  return (
    // <div className={"divSidebar " + (sidebarOpen ? "divSidebar-right" : "divSidebar-left")}>
      <div className="divSidebar">
      <ul>
        <li>
          <Link
            className={
              currentRoute.includes("chess") ? "link-sidebar-active" : ""
            }
            to="/chess"
          >
            <img className="sidebar-img" src="images/sidebar/chess.png"></img>
            <span className="sidebar-text">Chess</span>
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute.includes("volleyball") ? "link-sidebar-active" : ""
            }
            to="/volleyball"
          >
            <img
              className="sidebar-img"
              src="images/sidebar/volleyball.png"
            ></img>
            <span className="sidebar-text">Volleyball</span>
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute.includes("football") ? "link-sidebar-active" : ""
            }
            to="/football"
          >
            <img
              className="sidebar-img"
              src="images/sidebar/football.png"
            ></img>
            <span className="sidebar-text">Football</span>
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute.includes("tabletennis") ? "link-sidebar-active" : ""
            }
            to="/tabletennis"
          >
            <img
              className="sidebar-img"
              src="images/sidebar/table-tennis.png"
            ></img>
            <span className="sidebar-text">TableTennis</span>
          </Link>
        </li>
        <li>
          <Link
            className={
              currentRoute.includes("rugby") ? "link-sidebar-active" : ""
            }
            to="/rugby"
          >
            <img className="sidebar-img" src="images/sidebar/rugby.png"></img>
            <span className="sidebar-text">Rugby</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
