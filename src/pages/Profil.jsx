import React from "react";

function Profil() {
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
        <h1 className="text-lg font-semibold mb-4">Vasi licni podaci</h1>
        <form className="space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <p>Ime:</p>
              <input
                type="password"
                placeholder="Unesite staru lozinku"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="w-1/2">
              <p>Prezime:</p>
              <input
                type="password"
                placeholder="Unesite novu lozinku"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div>
            <p>Broj telefona:</p>
            <input
              type="password"
              placeholder="Potvrditi novu lozinku"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <p>E-mail:</p>
            <input
              type="password"
              placeholder="Potvrditi novu lozinku"
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
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Sacuvaj profil
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profil;
