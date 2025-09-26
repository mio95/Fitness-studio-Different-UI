import { useDispatch, useSelector } from "react-redux";
import { searchMembership } from "../features/membership/membershipThunks";
import { useState } from "react";

function OdobrenjeClanarine() {
  const dispatch = useDispatch();
  const { memberships } = useSelector((state) => state.membership);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(
      searchMembership({
        firstName: firstName,
        lastName: lastName,
        status: status,
      })
    );
  };

  return (
    <div className="felx-col mx-auto w-[70%] max-h-[100vh]">
      {/* filter */}
      <div className="max-h-[30vh]">
        <div className="text-xl text-left font-semibold mt-10">
          <p>Pretrazi clanarinu:</p>
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
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      handleSearch(e);
                    }}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Unesi prezime vezbaca"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      handleSearch(e);
                    }}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </td>
                <td>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Status članarine</option>
                    <option value="Placeno">Placeno</option>
                    <option value="Neodobreno">Neodobreno</option>
                    <option value="Odobreno">Odobreno</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Dugme za filter, a radi i automatski */}
        <div className="flex justify-end my-10">
          <button
            onClick={(e) => handleSearch(e)}
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
          >
            Pretrazi
          </button>
        </div>
      </div>
      {/* tabela za prikaz */}
      <div className="max-h-[30vh]">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 max-h-[60vh]">
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
              {memberships.map((membership) => (
                <tr className="hover:bg-base-300">
                  {/* ime */}
                  <th className="text-left">{membership.user.firstName}</th>
                  {/* prezime */}
                  <th className="text-left">{membership.user.lastName}</th>
                  {/* paket */}
                  <th className="text-center">
                    {membership.trainingPackage.trainingType.trainingType}
                  </th>
                  {/* broj treninga */}
                  <th className="text-center">
                    {membership.trainingPackage.numOfTrainings}
                  </th>
                  {/* broj preostalih treninga */}
                  <th className="text-center">
                    {membership.numOfRemainingTrainings}
                  </th>
                  {/* vazi od */}
                  <th className="text-center">{membership.startDate}</th>
                  {/* vazi do */}
                  <th className="text-center">{membership.endDate}</th>
                  {/* odobreno */}
                  {membership.paymentStatus === "Neodobreno" ? (
                    <th className="text-center text-red-500">
                      {membership.paymentStatus}
                    </th>
                  ) : (
                    <th className="text-center text-green-500">
                      {membership.paymentStatus}
                    </th>
                  )}
                  {/* odobri */}
                  {membership.paymentStatus === "Neodobreno" ? (
                    <th className="text-center">
                      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                        Odobri
                      </button>
                    </th>
                  ) : (
                    <th></th>
                  )}

                  {/* placeno */}
                  {membership.paymentStatus === "Neodobreno" ||
                  membership.paymentStatus === "Odobreno" ? (
                    <th className="text-center text-red-500">Nije placeno</th>
                  ) : (
                    <th className="text-center text-green-500">
                      {membership.paymentStatus}
                    </th>
                  )}

                  {/* odobri */}
                  {membership.paymentStatus === "Neodobreno" ? (
                    <th className="text-center text-red-500"></th>
                  ) : membership.paymentStatus === "Odobreno" ? (
                    <th className="text-center  text-green-500">
                      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
                        Platio
                      </button>
                    </th>
                  ) : (
                    <th className="text-center text-gray-500"></th>
                  )}

                  {/* status */}
                  {new Date() >= new Date(membership.startDate) &&
                  new Date() <= new Date(membership.endDate) ? (
                    <th className="text-center text-green-500">AKTIVNO</th>
                  ) : (
                    <th className="text-center text-red-500">NEAKTIVNO</th>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OdobrenjeClanarine;
