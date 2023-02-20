import { useState } from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const sidebarOpen = useSelector((state) => state.sidebarOpenState);

  return (
    <>
      <Navbar />

      <div className="home-box d-flex">
        {sidebarOpen && (
          <div className="p-2 flex-fill">
            <Sidebar />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
