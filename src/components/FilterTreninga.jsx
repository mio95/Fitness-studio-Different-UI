import React from "react";

function FilterTreninga() {
  return (
    <>
      <div className="text-xl text-left font-semibold mt-10">
        <p>Pretrazi trening:</p>
      </div>
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
    </>
  );
}

export default FilterTreninga;
