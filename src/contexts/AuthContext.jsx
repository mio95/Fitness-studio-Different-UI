import React, { useState, useEffect } from "react";
import * as authService from "../services/authService";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContextObj";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = authService.getToken();
    return token ? authService.parseToken(token) : null;
  });

  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    try {
      const parsed = await authService.login(email, password);
      // Sačuvaj token u localStorage
      localStorage.setItem("token", parsed.token);

      // Sačuvaj korisnika u localStorage (opciono, možeš i samo iz tokena parsirati)
      localStorage.setItem("user", JSON.stringify(parsed.user));
      setUser(parsed.username);
      return parsed;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    //navigate("/login");
  };

  useEffect(() => {
    const onLogout = () => {
      setUser(null);
      //navigate("/login");
    };
    window.addEventListener("logout", onLogout);
    return () => window.removeEventListener("logout", onLogout);
  }, []);

  useEffect(() => {
    const token = authService.getToken();
    if (!token) return;

    const decoded = authService.parseToken(token);
    if (!decoded) {
      logout();
      return;
    }
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      logout();
    } else {
      setUser(decoded);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
