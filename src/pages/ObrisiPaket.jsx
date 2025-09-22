import React from "react";

function ObrisiPaket() {
  return (
    <div className="w-[40%] m-auto">
      <h1 className="text-xl text-center font-semibold mb-10">
        Obriši paket članarine
      </h1>
      <form className="space-y-4">
        <div>
          <p>Paket:</p>
          <input
            type="dropdown"
            placeholder="Odaberi tip treninga"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Obrisi paket
        </button>
      </form>
    </div>
  );
}

export default ObrisiPaket;
