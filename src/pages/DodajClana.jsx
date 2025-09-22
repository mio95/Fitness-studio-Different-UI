import React from "react";

function DodajClana() {
  return (
    <div className="w-[70%] mx-auto my-auto">
      <h1 className="text-xl text-center font-semibold mb-4">
        Vasi licni podaci
      </h1>
      <form className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-auto md:w-1/2">
            <p>Ime:</p>
            <input
              type="text"
              placeholder="Ime"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="w-auto md:w-1/2">
            <p>Prezime:</p>
            <input
              type="text"
              placeholder="Prezime"
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
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <p>E-mail:</p>
          <input
            type="email"
            placeholder="E-mail adresa"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <p>Datum rodjenja:</p>
          <input
            type="date"
            placeholder="Datum rodjenja"
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
