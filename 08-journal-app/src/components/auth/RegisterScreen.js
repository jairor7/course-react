import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

export const RegisterScreen = () => {
  return (
    <form className="auth__container">
      <h3 className="auth__title">Sign up</h3>
      <input
        type={"text"}
        name={"name"}
        placeholder={"Name"}
        autoComplete="off"
      />
      <input
        type={"text"}
        name={"email"}
        placeholder={"Email"}
        autoComplete="off"
      />
      <input
        type={"password"}
        name={"password"}
        placeholder={"Password"}
      />
      <input
        type={"password"}
        name={"password2"}
        placeholder={"Confirm password"}
      />
      <button type="submit" className="primary default">
        Sign up
      </button>
      <hr />
      <Link className="link" to={routes.auth + routes.login}>
        Already have an account?
      </Link>
    </form>
  );
};
