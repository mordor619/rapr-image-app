import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./style.css";

function DropdownNavbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  }

  const handleUpload = () => {
    navigate('/upload');
  }

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
        <button className="dropdown-content-text" onClick={handleUpload}>Upload</button>
        <button className="dropdown-content-text" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default DropdownNavbar;
