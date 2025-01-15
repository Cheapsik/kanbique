import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

const AuthService = {
  login: async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem("token", response.data.token);
    return response.data;
  },
};

export default AuthService;
