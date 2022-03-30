import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routers/routes";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate(routes.root, { replace: true });
  };
  return (
    <div className="container mt-5 ms-5">
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
