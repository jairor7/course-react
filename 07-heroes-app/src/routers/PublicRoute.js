import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { routes } from "./routes";

export const PublicRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return !user.isAuthenticated ? (
    children
  ) : (
    <Navigate to={routes.root} />
  );
};
