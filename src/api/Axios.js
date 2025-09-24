import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
});

axiosInstance.interceptors.request.use(
  (config) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      // ignore (npr. SSR bez localStorage)
      console.log(e);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// axiosInstance.interceptors.response.use(
//   (res) => res,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       localStorage.removeItem("token");
//       // dispatch globalnog event-a da svi delovi aplikacije reaguju
//       window.dispatchEvent(new Event("logout"));
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
