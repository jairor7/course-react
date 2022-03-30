import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
        onClick={() =>
          setUser({
            id: 1,
            name: "Fernando",
          })
        }
        className="btn btn-primary"
      >
        Login
      </button>
    </div>
  );
};
