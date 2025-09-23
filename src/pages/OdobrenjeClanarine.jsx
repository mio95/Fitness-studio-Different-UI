import React from "react";

function OdobrenjeClanarine() {
  return (
    <div className="felx-col mx-auto w-[70%]">
      <div className="text-xl text-left font-semibold mt-10">
        <p>Pretrazi clanarinu:</p>
      </div>
      {/* filter */}
      <div className="rounded-box border border-base-content/5 bg-base-100 mt-10">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>Ime vezbaca</th>
              <th>Prezime vezbaca</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  placeholder="Unesi ime vezbaca"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Unesi prezime vezbaca"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </td>
              <td>
                <input
                  type="dropdown"
                  placeholder="Status clanarine"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end my-10">
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
          Pretrazi
        </button>
      </div>

      {/* tabela za prikaz */}
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead>
            <tr>
              <th className="text-left">Ime</th>
              <th className="text-left">Prezime</th>
              <th className="text-center">Paket</th>
              <th className="text-center">Broj treninga</th>
              <th className="text-center">Broj preostalih treninga</th>
              <th className="text-center">Vazi od</th>
              <th className="text-center">Vazi do</th>
              <th className="text-center">Odobreno</th>
              <th className="text-center"></th>
              <th className="text-center">Placeno</th>
              <th className="text-center"></th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-base-300">
              <th className="text-left"> Milan</th>
              <th className="text-left">Petrovic</th>
              <th className="text-center">Polupersonalni</th>
              <th className="text-center"> 12</th>
              <th className="text-center">3</th>
              <th className="text-center">1.10.2025.</th>
              <th className="text-center">1.11.2025.</th>
              <th className="text-center"> Odobreno</th>
              <th className="text-center">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                  Odobri
                </button>
              </th>
              <th className="text-center"> Placeno</th>
              <th className="text-center">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                  Odobri
                </button>
              </th>
              <th className="text-center">Status</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OdobrenjeClanarine;
