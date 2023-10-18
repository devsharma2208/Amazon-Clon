import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuth = useSelector((state) => state.isAthenticated);
  //   console.log(selector);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
