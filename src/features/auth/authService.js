import axios from "axios";

const API_URL = "http://localhost:8080/api";

const login = async (username, password) => {
  const res = await axios.post(`${API_URL}/login`, { username, password });

  const { token } = res.data;

  return {
    user: res.data,
    token, // ovde ostaje "Bearer eyJhbGciOi..."
  };
};

const authService = { login };

export default authService;
