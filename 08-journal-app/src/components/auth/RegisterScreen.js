import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { routes } from "../../routes/routes";

export const RegisterScreen = () => {
  const { values, handleInputChange } = useForm({
    name: "Jairo Rodriguez",
    email: "jairorodriguez.97@outlook.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = values;

  const handleRegister = (e) => {
    e.preventDefault();
    isFormValid();
    console.log(name, email, password, password2);
  };

  const isFormValid = () => {};

  return (
    <form onSubmit={handleRegister} className="auth__container">
      <h3 className="auth__title">Sign up</h3>
      <input
        type={"text"}
        name={"name"}
        onChange={handleInputChange}
        placeholder={"Name"}
        value={name}
        autoComplete="off"
      />
      <input
        type={"text"}
        name={"email"}
        onChange={handleInputChange}
        placeholder={"Email"}
        value={email}
        autoComplete="off"
      />
      <input
        type={"password"}
        name={"password"}
        onChange={handleInputChange}
        placeholder={"Password"}
        value={password}
      />
      <input
        type={"password"}
        name={"password2"}
        onChange={handleInputChange}
        placeholder={"Confirm password"}
        value={password2}
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
