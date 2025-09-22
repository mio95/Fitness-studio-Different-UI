import React from "react";

function DodajNoviPaket() {
  return (
    <div className="w-[40%] m-auto">
      <h1 className="text-xl text-center font-semibold mb-10">
        Napravi novi paket članarine
      </h1>
      <form className="space-y-4">
        <div>
          <p>Tip treninga:</p>
          <input
            type="dropdown"
            placeholder="Odaberi tip treninga"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div>
          <p>Broj treninga:</p>
          <input
            type="number"
            placeholder="Unesi broj treninga"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Dodaj novi paket
        </button>
      </form>
    </div>
  );
}

export default DodajNoviPaket;
