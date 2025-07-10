import React, { useState, useEffect } from "react";
import SurveyDashboard from "./SurveyDashboard ";

const SurveyAuth = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Check if token is valid on load
    useEffect(() => {
        const stored = localStorage.getItem("survey_token");
        if (stored) {
            const { token, expiresAt } = JSON.parse(stored);
            if (new Date().getTime() < expiresAt) {
                setAuthenticated(true);
            } else {
                localStorage.removeItem("survey_token"); // expired
            }
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === "mishukinfo09@gmail.com" && password === "admin09") {
            const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
            const expiresAt = new Date().getTime() + 60 * 60 * 1000; // 1 hour

            localStorage.setItem("survey_token", JSON.stringify({ token, expiresAt }));
            setAuthenticated(true);
        } else {
            alert("❌ Invalid credentials");
        }
    };



    return (

        <>
            {authenticated ? (
                <SurveyDashboard />
            ) : (
                <div className="h-auto relative flex items-center rounded justify-center bg-gray-100 px-4">



                    <form
                        onSubmit={handleLogin}
                        className="bg-white shadow-md rounded-xl p-8 m-6 w-full max-w-sm"
                    >
                        <h2 className="text-xl font-semibold text-blue-700 mb-6 text-center">🔐 Survey Login</h2>

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full mb-4 bg-gray-200  p-2 border rounded-md"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full mb-6 bg-gray-200  p-2 border rounded-md"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </form>
                </div>)};
        </>
    );
};

export default SurveyAuth;
