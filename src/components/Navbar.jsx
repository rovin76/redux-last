import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginoutAPI } from "../store/Auth/auth.actions";

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    dispatch(loginoutAPI());
  };
  return (
    <div
      data-cy="navbar"
      style={{
        padding: "10px",
        display: "flex",
        gap: "20px",
        justifyContent: "space-between"
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px"
        }}
      >
        <Link data-cy="navbar-home-link" to="/">
          Logo
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px"
        }}
      >
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
