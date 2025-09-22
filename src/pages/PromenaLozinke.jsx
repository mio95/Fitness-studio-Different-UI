import React from "react";
import { useState } from "react";

function PromenaLozinke() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovde ide logika za promenu lozinke
    if (newPassword !== confirmPassword) {
      alert("Nova lozinka i potvrda se ne poklapaju!");
      return;
    }
    console.log("Promena lozinke:", { oldPassword, newPassword });
    // Reset input polja
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="my-auto mx-auto w-[40%] p-6  bg-white">
      <h2 className="text-xl text-center font-semibold mb-4">Promeni šifru</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="Unesite staru lozinku"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="password"
          placeholder="Unesite novu lozinku"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="password"
          placeholder="Potvrditi novu lozinku"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Promeni lozinku
        </button>
      </form>
    </div>
  );
}

export default PromenaLozinke;
