import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewUser } from "../features/auth/authThunks";

function DodajClana() {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [brojTelefona, setBrojTelefona] = useState("");
  const [username, setUsername] = useState("");
  const [datumRodjenja, setDatumRodjenja] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addNewUser({
        username: username,
        firstName: ime,
        lastName: prezime,
        phoneNumber: brojTelefona,
        dateOfBirth: datumRodjenja,
        role: "VEZBAC",
      })
    );
  };

  return (
    <div className="w-[70%] mx-auto my-auto">
      <h1 className="text-xl text-center font-semibold mb-4">
        Unesite podatke za novog clana:
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-auto md:w-1/2">
            <p>Ime:</p>
            <input
              type="text"
              placeholder="Ime"
              value={ime}
              onChange={(e) => setIme(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="w-auto md:w-1/2">
            <p>Prezime:</p>
            <input
              type="text"
              placeholder="Prezime"
              value={prezime}
              onChange={(e) => setPrezime(e.target.value)}
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
            value={brojTelefona}
            onChange={(e) => setBrojTelefona(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <p>E-mail:</p>
          <input
            type="username"
            placeholder="Username clana"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <p>Datum rodjenja:</p>
          <input
            type="date"
            placeholder="Datum rodjenja"
            value={datumRodjenja}
            onChange={(e) => setDatumRodjenja(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Kreiraj korisnika
        </button>
      </form>
    </div>
  );
}

export default DodajClana;
