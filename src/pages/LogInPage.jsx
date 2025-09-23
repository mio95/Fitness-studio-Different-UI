import React from "react";
import { useState } from "react";

function LogInPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex justify-center items-center w-[40%] gap-10">
        <div>
          <p>Logo</p>
        </div>
        <div>
          <p>Username</p>
          <input
            type="text"
            placeholder="Unesite username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
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
            onClick={() => {
              console.log(userName, password);
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
