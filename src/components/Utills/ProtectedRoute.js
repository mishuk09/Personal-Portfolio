// components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuth = localStorage.getItem("isAuthenticated") === "true";

    return isAuth ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
