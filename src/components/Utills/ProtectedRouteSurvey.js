// components/ProtectedRoute.js
import { Navigate } from "react-router-dom";

const ProtectedRouteSurvey = ({ children }) => {
    const isAuth = localStorage.getItem("isAuthenticatedDashboard") === "true";

    return isAuth ? children : <Navigate to="/" replace />;
};

export default ProtectedRouteSurvey;
