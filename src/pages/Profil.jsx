import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../features/auth/authThunks";

function Profil() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const [username, setUsername] = useState(user?.username);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);
  const [dateOfBirth, setDateOfBirth] = useState(user?.dateOfBirth);

  const formData = {
    id: user?.id || "",
    password: user?.password || "",
    role: user?.role || "",
    username,
    firstName,
    lastName,
    phoneNumber,
    dateOfBirth,
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(formData));
  };

  return (
    <div className="flex items-center justify-center h-screen mx-auto gap-10 w-[60%]">
      <div className="w-[30%]">
        <img className="mx-auto" src="logo.jpeg" alt="slika" />
        <div className="text-center">
          <p>Rola</p>
          <p>Ime i prezime</p>
        </div>
      </div>
      <div className="w-[70%]">
        <h1 className="text-xl text-center font-semibold mb-10">
          Vasi licni podaci
        </h1>
        {/* <form className="space-y-4"> */}
        <form onSubmit={handleSubmit} className=" mx-auto p-4 gap-3">
          <div className="flex gap-5">
            <div className="w-1/2">
              <p>Ime:</p>
              <input
                type="text"
                placeholder="Ime"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="w-1/2">
              <p>Prezime:</p>
              <input
                type="text"
                placeholder="Prezime"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div>
            <p>Broj telefona:</p>
            <input
              type="phone"
              placeholder="Broj telefona"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <p>Username:</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-gray-200 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 "
              disabled
              required
            />
          </div>

          <div>
            <p>Datum rodjenja:</p>
            <input
              type="date"
              placeholder="Datum rodjenja"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600 transition-colors"
            disabled={loading}
          >
            {loading ? "Čuvanje..." : "Sačuvaj profil"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profil;
