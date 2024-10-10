import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(""); // To handle error messages

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", formData);
            login(response.data); 
            navigate("/home"); // Redirect to the home page after successful login
        } catch (error) {
            console.error(error.response.data);
            setError(error.response?.data?.message || "Login failed. Please try again."); // Set error message for UI
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl mb-6 text-center">Login</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}
                <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
                <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded">
                    Login
                </button>
                <p className="mt-4 text-center">
                    Don't have an account?{" "}
                    <button type="button" onClick={() => navigate("/signup")} className="text-indigo-600 hover:underline">
                        Sign Up
                    </button>
                </p>
            </form>
        </div>
    );
}
