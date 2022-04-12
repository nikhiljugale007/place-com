import React from "react";
import { FaBars, FaYoutube, FaUserCircle } from "../../icons";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useAppContext } from "../../context/Contex";
const Header = () => {
	const { appState } = useAppContext();
	const getActiveStyle = ({ isActive }) => ({
		color: isActive ? "blue" : "",
		backgroundColor: "transparent",
		border: "none",
	});
	return (
		<nav className="nav">
			<div className="nav-sub-container">
				<button className="btn btn-icon btn-sidebar-menu hide">
					<FaBars className="" size={20} />
				</button>
				<NavLink to="/" className="header-link" style={getActiveStyle}>
					<p className="flex-hz youtube-icon">
						<FaYoutube size={30} />
						<p className="typo-title">PlaceCom</p>
					</p>
				</NavLink>
			</div>

			<div className="nav-sub-container">
				<NavLink to="/profile" className="header-link" style={getActiveStyle}>
					{appState.userData.isLoggedIn ? (
						<button className="btn btn-icon">
							<FaUserCircle size={20} />
						</button>
					) : (
						<button className="btn btn-primary">LOGIN</button>
					)}
				</NavLink>
			</div>
		</nav>
	);
};

export { Header };
