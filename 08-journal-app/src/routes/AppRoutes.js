import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { routes } from "./routes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.auth + "/*"} element={<AuthRouter />} />
        <Route path={routes.journal} element={<JournalScreen />} />
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
    </BrowserRouter>
  );
};
