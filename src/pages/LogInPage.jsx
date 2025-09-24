import React, { useState } from "react";
import { useAuth } from "../hook/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Greška pri prijavi"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl mb-4">Prijava</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex justify-center items-center w-[40%] gap-10">
          <div>
            <p>Logo</p>
          </div>
          <div>
            <p>Username</p>
            <input
              type="text"
              placeholder="Unesite username/e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p>Password</p>
            <input
              type="password"
              placeholder="Unesite pasword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl my-10"
              type="submit"
              // onClick={() => {
              //   console.log(userName, password);
              // }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LogInPage;
