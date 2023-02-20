import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import "./style.css";

function DropdownNavbar() {
  return (
    <div className="dropdown">
      <button className="dropbtn">
        <div className="new-box d-flex">
          <div className="p-2 flex-fill">
            <img src="images/avatar-img.png" />
          </div>
          <div
            style={{ marginTop: "5px", marginLeft: "10px" }}
            className="p-2 flex-fill"
          >
            <span className="dropdown-text">Alex John</span>
          </div>
          <div
            style={{ marginTop: "8px", marginLeft: "10px" }}
            className="p-2 flex-fill"
          >
            <AiFillCaretDown />
          </div>
        </div>
      </button>
      <div className="dropdown-content">
        <a className="dropdown-content-text" href="#">Profile</a>
        <a className="dropdown-content-text" href="#">Help</a>
        <a className="dropdown-content-text" href="#">Logout</a>
      </div>
    </div>
  );
}

export default DropdownNavbar;
