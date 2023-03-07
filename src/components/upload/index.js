import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../sidebar/sidebar";
import "./style.css";

function Upload() {
  const sidebarOpen = useSelector((state) => state.sidebarOpenState);

  const [images, setImages] = useState([]);
  const [imgFile, setImgFile] = useState([]);
  const [uploadTimestamp, setUploadTimestamp] = useState(null);

  const uploadImageHandler = (e) => {
    const { files } = e.target;

    setUploadTimestamp(new Date().toLocaleString());

    let imgData = [];
    let imgFile = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      imgFile.push(file);
      imgData.push(URL.createObjectURL(file));
    }

    setImgFile(imgFile);

    // console.log(imgFile);
    // console.log(imgData);

    setImages(imgData);
  };


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
            sidebarOpen ? "sidebar-open" : "sidebar-closed"
          }`}
        >
          <form>
            <p>
              <label htmlFor="file" className="upload-label">
                Upload images
              </label>
              <hr className="hr-upload" />
              <br></br>
              <br></br>
              <input
                type="file"
                id="file"
                onChange={uploadImageHandler}
                accept="image/*"
                multiple
              />
            </p>
          </form>

          {images && (
            <div className="d-flex uploaded-images-here">
              {images.map((img, i) => {
                return (
                  <div className="p-2 flex-fill">
                    <img
                      className="preview-img"
                      src={img}
                      alt="img-not-found"
                      key={i}
                    />
                    <br></br>
                    <span>{imgFile[i].name}</span>
                    <br></br>
                    <span>{uploadTimestamp}</span>
                  </div>
                );
              })}
            </div>
          )}

       
        </div>
      </div>
    </>
  );
}

export default Upload;
