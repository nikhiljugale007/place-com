import { NavLink, useLocation } from "react-router-dom";
import {
  FaHome,
  FaCompass,
  FaHistory,
  FaClock,
  FaThList,
  FaThumbsUp,
} from "../../icons";
import "./MobileNavigation.css";
export const MobileNavigation = () => {
  const location = useLocation();

  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "#FFF" : "",
    border: "none",
  });
  return (
    <div className="flex-hz-space-bw full-width mobile-nav-container ">
      <NavLink
        to="/"
        className="sidebar-item link-no-style"
        style={getActiveStyle}
      >
        <FaHome size={20} /> <p>Home</p>
      </NavLink>
      <NavLink
        to="/drives"
        className="sidebar-item link-no-style"
        style={getActiveStyle}
      >
        <FaCompass size={20} /> <p>All Drives</p>
      </NavLink>
      <NavLink
        to="/applied-drives"
        className="sidebar-item link-no-style "
        style={getActiveStyle}
        state={{ from: location }}
      >
        <FaThList size={20} /> <p>Applies Drives</p>
      </NavLink>
      <NavLink
        to="/upcoming-drives"
        className="sidebar-item link-no-style "
        style={getActiveStyle}
        state={{ from: location }}
      >
        <FaThumbsUp size={20} /> <p className="typo-subtext">Upcoming Drives</p>
      </NavLink>
    </div>
  );
};
