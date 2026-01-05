import React, { createContext, useState, useEffect } from "react";

export const AuthContext: any = createContext(null);

export const AuthProvider = ({ children }: any) => {
    const [token, setToken] = useState(null);
    console.log('children', children)

    useEffect(() => {
        const validToken: any = localStorage.getItem("token");

        if (validToken) setToken(validToken);

    }, []);

    const login = (jwt: any) => {
        localStorage.setItem('token', jwt);
        setToken(jwt);
    }

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider >
    )
}