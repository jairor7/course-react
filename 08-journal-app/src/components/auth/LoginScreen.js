import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { routes } from "../../routes/routes";
import {
  loginAction,
  startLoginAction,
  startGoogleLoginAction,
} from "../../store/actions/authActions";

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const { values, handleInputChange } = useForm({
    email: "jairorodriguez.97@outlook.com",
    password: "123456",
  });

  const { email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(startLoginAction(email, password));
    // dispatch(loginAction(12345, "Jairo Rodriguez"));
    console.log(values);
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLoginAction());
  };

  return (
    <form onSubmit={handleSubmit} className="auth__container">
      <h3 className="auth__title">Login</h3>
      <input
        autoComplete="off"
        name={"email"}
        onChange={handleInputChange}
        placeholder={"Email"}
        type={"text"}
        value={email}
      />
      <input
        type={"password"}
        name={"password"}
        onChange={handleInputChange}
        placeholder={"Password"}
        value={password}
      />
      <button type="submit" className="primary large">
        Login
      </button>
      <hr />
      <span>Login with social networks</span>
      <div onClick={handleGoogleLogin} className="google-btn">
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
