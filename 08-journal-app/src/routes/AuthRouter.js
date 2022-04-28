import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { routes } from "./routes";

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-main">
        <Routes>
          <Route path={routes.login} element={<LoginScreen />} />
          <Route
            path={routes.register}
            element={<RegisterScreen />}
          />
          <Route
            path={routes.other}
            element={
              <Navigate
                to={routes.auth + routes.login}
                replace={true}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};
