import React from "react";
import { Navigate } from "react-router";
import { useAppContext } from "../../context/Contex";

const RequireAuth = ({ children, from }) => {
	const { appState } = useAppContext();
	return appState.userData.isLoggedIn ? (
		children
	) : (
		<Navigate to="/login" replace state={{ from: from }} />
	);
};

export { RequireAuth };
