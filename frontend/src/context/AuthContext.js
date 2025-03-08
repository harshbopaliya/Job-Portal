import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    useEffect(() => {
        if (token) {
            setUser({ username: localStorage.getItem("username") });
        }
    }, [token]);

    const login = (username, accessToken) => {
        localStorage.setItem("token", accessToken);
        localStorage.setItem("username", username);
        setToken(accessToken);
        setUser({ username });
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setToken("");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
