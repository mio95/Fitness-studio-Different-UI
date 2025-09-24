import axios from "axios";

const API_URL = "http://localhost:8080/api";

const login = async (username, password) => {
  const res = await axios.post(`${API_URL}/login`, { username, password });

  const { token, password: _, ...userWithoutPassword } = res.data;

  return {
    user: userWithoutPassword,
    token, // ovde ostaje "Bearer eyJhbGciOi..."
  };
};

const authService = { login };

export default authService;
