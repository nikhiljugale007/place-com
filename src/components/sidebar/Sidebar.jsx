import "./Sidebar.css";
import {
  FaHome,
  FaCompass,
  FaHistory,
  FaClock,
  BsFillFileEarmarkCheckFill,
  FaThList,
  FaThumbsUp,
} from "../../icons";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "white" : "",
  });
  const location = useLocation();
  return (
    <>
      <div className="sidebar-container">
        <NavLink
          to="/"
          className="sidebar-item link-no-style "
          style={getActiveStyle}
        >
          <FaHome size={20} /> <p className="typo-subtext">Home</p>
        </NavLink>
        <NavLink
          to="/drives"
          className="sidebar-item link-no-style"
          style={getActiveStyle}
        >
          <FaCompass size={20} /> <p className="typo-subtext">All Drives</p>
        </NavLink>
        <NavLink
          to="/applied-drives"
          className="sidebar-item link-no-style "
          style={getActiveStyle}
          state={{ from: location }}
        >
          <FaThList size={20} /> <p className="typo-subtext">Applied Drives</p>
        </NavLink>

        <NavLink
          to="/upcoming-drives"
          className="sidebar-item link-no-style "
          style={getActiveStyle}
          state={{ from: location }}
        >
          <FaThumbsUp size={20} />{" "}
          <p className="typo-subtext">Upcoming Drives</p>
        </NavLink>
        <NavLink
          to="/resume"
          className="sidebar-item link-no-style "
          style={getActiveStyle}
          state={{ from: location }}
        >
          <BsFillFileEarmarkCheckFill size={20} />{" "}
          <p className="typo-subtext">Resume Builder</p>
        </NavLink>
        {/*<NavLink
					to="/watch-later"
					className="sidebar-item link-no-style "
					style={getActiveStyle}
					state={{ from: location }}
				>
					<FaClock size={20} /> <p>Watch Later</p>
				</NavLink>
				<NavLink
					to="/history"
					className="sidebar-item link-no-style"
					style={getActiveStyle}
					state={{ from: location }}
				>
					<FaHistory size={20} /> <p>History</p>
				</NavLink> */}
      </div>
    </>
  );
};

export { Sidebar };
