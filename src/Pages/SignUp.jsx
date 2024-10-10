import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", formData);
            alert("User Registered Successfully");
            navigate("/login"); 
        } catch (error) {
            console.error(error.response.data);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl mb-6 text-center">Create an Account</h2>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} className="w-full p-2 mb-4 border rounded" />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 mb-4 border rounded" />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 mb-4 border rounded" />
                <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded">
                    Sign Up
                </button>
                <p className="mt-4 text-center">
                    Already have an account?{" "}
                    <button type="button" onClick={() => navigate("/login")} className="text-indigo-600 hover:underline">
                        Login
                    </button>
                </p>
            </form>
        </div>
    );
}
