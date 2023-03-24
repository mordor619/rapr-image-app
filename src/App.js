import "./App.css";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Chess from "./components/chess/chess";
import Volleyball from "./components/volleyball/volleyball";
import Football from "./components/football/football";
import TableTennis from "./components/tabletennis/tabletennis";
import Rugby from "./components/rugby/rugby";
import Home from "./components/home/home";
import Login from "./components/login";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Upload from "./components/upload";
import ApiComp from "./components/apicomp";
import CalendarComp from "./components/calendar";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn") || false;

    // console.log(loggedIn);

    if (!loggedIn) {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/apicomp" element={<ApiComp />} />

        <Route path="/calendarcomp" element={<CalendarComp />} />

        <Route
          path="/upload"
          element={
            <>
              <Navbar />
              <Upload />
            </>
          }
        />

        <Route
          path="/chess"
          element={
            <>
              <Navbar />
              <Chess />
            </>
          }
        />

        <Route
          path="/volleyball"
          element={
            <>
              <Navbar />
              <Volleyball />
            </>
          }
        />

        <Route
          path="/tabletennis"
          element={
            <>
              <Navbar />
              <TableTennis />
            </>
          }
        />

        <Route
          path="/football"
          element={
            <>
              <Navbar />
              <Football />
            </>
          }
        />

        <Route
          path="/rugby"
          element={
            <>
              <Navbar />
              <Rugby />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
