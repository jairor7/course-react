import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { routes } from "./routes";

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  localStorage.setItem(
    "lastPath",
    location.pathname + location.search
  );
  return user.isAuthenticated ? (
    children
  ) : (
    <Navigate to={routes.login} />
  );
};
