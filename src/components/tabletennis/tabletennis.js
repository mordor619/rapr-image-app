import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../sidebar/sidebar";
import "./style.css";
import SimpleImageSlider from "react-simple-image-slider";

function TableTennis() {
  const sidebarOpen = useSelector((state) => state.sidebarOpenState);

  const images = [
    { url: "images/tt/1.jpg" },
    { url: "images/tt/2.jpg" },
    { url: "images/tt/3.jpg" },
  ];

  return (
    <>
      <div className="home-box d-flex">
        {sidebarOpen && (
          <div className="p-2 flex-fill">
            <Sidebar />
          </div>
        )}
        <div
          className={`p-2 flex-fill ${
            sidebarOpen ? "image-slider-open" : "image-slider-closed"
          }`}
        >
          <span className="maincontent-header-text">TableTennis</span>
          <br></br>
          <br></br>
          <SimpleImageSlider
            width={sidebarOpen ? 896 : 880}
            height={sidebarOpen ? 430 : 440}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
      </div>
    </>
  );
}

export default TableTennis;
