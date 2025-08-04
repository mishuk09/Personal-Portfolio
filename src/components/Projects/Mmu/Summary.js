// components/SurveyLoginModal.js
import { useState } from "react";

const Summary = ({ onClose }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (email === "mishukinfo09@gmail.com" && password === "mishuk09") {
            localStorage.setItem("isAuthenticated", "true"); // ✅ Set login
            onClose();
            // Use anchor tag navigation by setting href
            window.location.href = "/summary"; // Equivalent to <a href="/summary">
        } else {
            setError("❌ Invalid credentials");
        }
    };



    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold text-center text-blue-700 mb-4">🔐 Login Required</h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-300 text-black px-3 py-2 border rounded mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-gray-300 text-black px-3 py-2 border rounded mb-3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleLogin}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Summary;
