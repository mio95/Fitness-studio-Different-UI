import React from "react";

function StatistikaVezbaca() {
  return (
    <div className="felx-col mx-auto w-[70%]">
      {/* filter */}
      <div className="rounded-box border border-base-content/5 bg-base-100 mt-10">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>Ime vezbaca</th>
              <th>Tip treninga</th>
              <th>Datum do</th>
              <th>Datum do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="dropdown"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </td>
              <td>
                <input
                  type="dropdown"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </td>
              <td>
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </td>
              <td>
                <input
                  type="date"
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
              <th>#</th>
              <th>Ime i prezime</th>
              <th>Datum i vreme treninga</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-base-300">
              <th>1</th>
              <td>Milan Petrovic</td>
              <td>19.21.2023. 10:00</td>
              <td>Rezervisan</td>
            </tr>
            <tr className="hover:bg-base-300">
              <th>2</th>
              <td>Milan Petrovic</td>
              <td>19.21.2023. 10:00</td>
              <td>Rezervisan</td>
            </tr>
            <tr className="hover:bg-base-300">
              <th>3</th>
              <td>Milan Petrovic</td>
              <td>19.21.2023. 10:00</td>
              <td>Rezervisan</td>
            </tr>
            <tr className="hover:bg-base-300">
              <th>4</th>
              <td>Milan Petrovic</td>
              <td>19.21.2023. 10:00</td>
              <td>Rezervisan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StatistikaVezbaca;
