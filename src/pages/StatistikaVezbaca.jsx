import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersByRole } from "../features/user/userThunks";
import { getTrainingTypes } from "../features/traningType/traningTypeThunks";

function StatistikaVezbaca() {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);
  const [selectedTrainerId, setSelectedTrainerId] = useState("");

  const { trainingTypes } = useSelector((state) => state.trainingType);
  const [selectedTrainingTypeId, setSelectedTrainingTypeId] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    dispatch(getAllUsersByRole("VEZBAC"));
    dispatch(getTrainingTypes());
  }, []);

  const handleChangeTrainingType = (e) => {
    setSelectedTrainingTypeId(e.target.value);
  };

  const handleChangeUserID = (e) => {
    setSelectedTrainerId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="felx-col mx-auto w-[70%]">
      <div className="text-xl text-left font-semibold mt-10">
        <p>Pretraga po vezbaču:</p>
      </div>
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
                {Array.isArray(users) && users.length > 0 && (
                  <select
                    value={selectedTrainerId}
                    onChange={handleChangeUserID}
                    disabled={!Array.isArray(users) || users.length === 0}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                  >
                    {Array.isArray(users) && users.length > 0 ? (
                      users?.map((user) => (
                        <option
                          key={user.id}
                          value={user.id}
                          className="text-black"
                        >
                          {user.firstName} {user.lastName}
                        </option>
                      ))
                    ) : (
                      <option value="">Učitavanje svih trenera ...</option>
                    )}
                  </select>
                )}
              </td>
              <td>
                {Array.isArray(trainingTypes) && trainingTypes.length > 0 && (
                  <select
                    value={selectedTrainingTypeId}
                    onChange={handleChangeTrainingType}
                    disabled={
                      !Array.isArray(trainingTypes) ||
                      trainingTypes.length === 0
                    }
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                  >
                    {trainingTypes && trainingTypes.length > 0 ? (
                      trainingTypes.map((type) => (
                        <option
                          key={type.id}
                          value={type.id}
                          className="text-black"
                        >
                          {type.trainingType}
                        </option>
                      ))
                    ) : (
                      <option value="">
                        Učitavanje svih tipova treninga ...
                      </option>
                    )}
                  </select>
                )}
              </td>
              <td>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </td>
              <td>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end my-10">
        <button
          onClick={(e) => handleSubmit(e)}
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
        >
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
