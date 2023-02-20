import "./style.css";
import { GiHamburgerMenu } from "react-icons/gi";
import DropdownNavbar from "../dropdown/dropdown";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/indexStore";
import { Link } from "react-router-dom";

function Navbar() {
  const sidebarOpen = useSelector((state) => state.sidebarOpenState);
  const dispatch = useDispatch();

  const handleToggleSidebar = (e) => {
    e.preventDefault();
    // console.log('CLICKED');
    dispatch(actions.toggleSidebar());
  };

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
        <li style={{ float: "right" }}>
          <DropdownNavbar />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
