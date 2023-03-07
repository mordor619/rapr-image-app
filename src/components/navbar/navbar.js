import "./style.css";
import { GiHamburgerMenu } from "react-icons/gi";
import DropdownNavbar from "../dropdown/dropdown";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/indexStore";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const sidebarOpen = useSelector((state) => state.sidebarOpenState);
  const dispatch = useDispatch();

  const [loginTime, setLoginTime] = useState(
    localStorage.getItem("last-login")
  );

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTimer = () => {
    const currentTime = Date.now();

    // console.log('current', currentTime);
    // console.log('login', loginTime);

    const time = currentTime - Date.parse(loginTime);

    var h = Math.floor((time / (1000 * 60 * 60)) % 24);
    var m = Math.floor((time / 1000 / 60) % 60);
    var s = Math.floor((time / 1000) % 60);

    h = h > 9 ? "" + h : "0" + h;
    m = m > 9 ? "" + m : "0" + m;
    s = s > 9 ? "" + s : "0" + s;

    // console.log(h);

    setHours(h);
    setMinutes(m);
    setSeconds(s);
  };

  const handleToggleSidebar = (e) => {
    e.preventDefault();
    // console.log('CLICKED');
    dispatch(actions.toggleSidebar());
  };

  useEffect(() => {
    const interval = setInterval(() => getTimer(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="divNavbar">
      <ul>
        <li>
          <Link className="navbar-head-logo" to="/">
            <span style={{ color: "#00308F", fontWeight: "bold" }}>CODING</span>{" "}
            <span style={{ color: "#72A0C1", fontWeight: "bold" }}>MARKET</span>
          </Link>
        </li>
        <li>
          <button className="btn-navbar-burger" onClick={handleToggleSidebar}>
            <GiHamburgerMenu />
          </button>
        </li>
        <li>
          <span className="navbar-login-time">
            Last logged in : {loginTime} ( {hours}:{minutes}:{seconds} )
          </span>
        </li>

        <li style={{ float: "right" }}>
          <DropdownNavbar />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
