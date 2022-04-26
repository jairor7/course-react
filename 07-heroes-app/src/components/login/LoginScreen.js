import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routers/routes";
import { AuthContext } from "../../context/AuthContext";
import { authTypes } from "../../store/types";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    const action = {
      type: authTypes.LOGIN,
      payload: {
        name: "Jairo R.",
        lastName: "Rodriguez",
      },
    };
    dispatch(action);
    const lastPath = localStorage.getItem("lastPath") ?? routes.root;
    navigate(lastPath, { replace: true });
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
