// components/ProtectedRoute.js
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAuth = localStorage.getItem("isAuthenticated") === "true";

    return isAuth ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
