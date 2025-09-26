import axiosInstance from "../api/axios";
import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = "token";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  // opcionalno: pozovi backend /auth/logout ako koristiš cookie/session
}

export function parseToken(token) {
  if (!token) return { token: null, role: null };
  try {
    const decoded = jwtDecode(token);
    return {
      token,
      role: decoded.role, // čuvamo rolu iz JWT
    };
  } catch (e) {
    e.error;
    return { token: null, role: null };
  }
}

export async function login(email, password) {
  const res = await axiosInstance.post("/login", {
    username: email,
    password: password,
  });
  const { token } = res.data;
  if (!token) throw new Error("Token nije vraćen od servera");
  localStorage.setItem(TOKEN_KEY, token);
  return parseToken(token);
}

export function isAuthenticated() {
  const token = getToken();
  if (!token) return false;
  const decoded = parseToken(token);
  if (!decoded) return false;
  //vremenski period vazenja tokena
  if (decoded.exp && Date.now() >= decoded.exp * 1000) {
    // istekao token
    return false;
  }
  return true;
}

export default { login, logout, getToken, parseToken, isAuthenticated };
