import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

export const LoginScreen = () => {
  return (
    <form className="auth__container">
      <h3 className="auth__title">Login</h3>
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
      <button type="submit" className="primary large">
        Login
      </button>
      <hr />
      <span>Login with social networks</span>
      <div className="google-btn">
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google button"
          />
        </div>
        <p className="btn-text">
          <b>Sign in with Google</b>
        </p>
      </div>
      <hr />
      <Link className="link" to={routes.auth + routes.register}>
        Create new account
      </Link>
    </form>
  );
};
