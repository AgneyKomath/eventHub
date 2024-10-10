import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (userData) => {
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
