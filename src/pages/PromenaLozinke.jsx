import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserPassword } from "../features/user/userThunks";
import { toast } from "react-toastify";

function PromenaLozinke() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovde ide logika za promenu lozinke
    if (newPassword !== confirmPassword) {
      toast.error("Nova lozinka i potvrda se ne poklapaju!");
      return;
    }
    dispatch(
      updateUserPassword({
        userId: currentUser.id,
        changePassword: {
          oldPassword: oldPassword,
          newPassword: newPassword,
        },
      })
    );

    // Reset input polja
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="m-auto w-[40%] bg-white">
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
