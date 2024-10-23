import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("user"));
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
    }, []);

    const login = (userData) => {
        console.log("User data on login:", userData); // Debugging line
        setUser(userData); // Set user data (including token)
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(userData)); // Save user info in localStorage
    };


    const logout = () => {
        setIsAuthenticated(false);
        setUser(null); // Clear user state
        localStorage.removeItem("user");
    };
    // const isAuthenticated = !!user; 

    return <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
