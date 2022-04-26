import { AppRouter } from "./routers/AppRouter";
import { AuthContext } from "./context/AuthContext";
import { useEffect, useReducer } from "react";
import { authReducer } from "./store/reducers/authReducer";

const init = () => {
  return (
    JSON.parse(localStorage.getItem("user")) ?? {
      isAuthenticated: false,
    }
  );
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, null, init);
  useEffect(() => {
    if (user?.isAuthenticated) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
