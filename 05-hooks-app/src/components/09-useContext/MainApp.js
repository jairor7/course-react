import React, { useState } from "react";
import { AppRouter } from "./AppRouter";
import "../../styles/components/09-useContext/styles.css";
import { UserContext } from "./UserContext";

export const MainApp = () => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};
