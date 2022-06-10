import React from "react";

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auth);
  const location = useLocation();
  return <Navigate to="/login" state={from} />;
};
export default RequiredAuth;
