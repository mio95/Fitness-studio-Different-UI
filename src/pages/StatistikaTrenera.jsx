import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersByRole } from "../features/user/userThunks";
import { getTrainingTypes } from "../features/traningType/traningTypeThunks";
import { getStatistics } from "../features/statistics/statisticsUserAndTrainingTypeThunks";
import { useDateFormatter } from "../hook/useDateFormatter";
import TrainingDetailsModal from "../components/modal/Model";

function StatistikaTrenera() {
  const dispatch = useDispatch();
  const { formatDate, formatTime } = useDateFormatter();

  const { users } = useSelector((state) => state.user);
  const [selectedTrainerId, setSelectedTrainerId] = useState("");

  const { trainingTypes } = useSelector((state) => state.trainingType);
  const [selectedTrainingTypeId, setSelectedTrainingTypeId] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { statistics } = useSelector((state) => state.statistics);

  //MODAL
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (item) => {
    setSelectedTraining(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTraining(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(getAllUsersByRole("TRENER"));
    dispatch(getTrainingTypes());
  }, []);

  const handleChangeTrainerID = (e) => {
    setSelectedTrainerId(e.target.value);
  };

  const handleChangeTrainingType = (e) => {
    setSelectedTrainingTypeId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const logaDateStart = new Date(startDate);
    const logaDateEnd = new Date(endDate);

    console.log(
      logaDateStart.getTime(),
      logaDateEnd.getTime(),
      selectedTrainerId,
      selectedTrainingTypeId
    );
    dispatch(
      getStatistics({
        startDate: logaDateStart.getTime(),
        endDate: logaDateEnd.getTime(),
        userId: selectedTrainerId,
        trainingTypeId: selectedTrainingTypeId,
      })
    );
  };

  useEffect(() => {
    statistics.map((stat) => console.log(stat));
  }, [statistics]);

  return (
    <>
      <div className="felx-col mx-auto w-[70%]">
        <div className="text-xl text-left font-semibold mt-10">
          <p>Pretraga po treneru:</p>
        </div>
        {/* filter */}
        <div className="rounded-box border border-base-content/5 bg-base-100 mt-10">
          <table className="table ">
            {/* head */}
            <thead>
              <tr>
                <th>Ime trenera</th>
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
                      onChange={handleChangeTrainerID}
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
        {/* Dugme za pretragu */}
        <div className="flex justify-end my-10">
          <button
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
            onClick={(e) => handleSubmit(e)}
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
                <th>Tip treninga</th>
                <th>Ime i prezime trenera</th>
                <th>Datum i vreme treninga</th>
                <th>Broj vezbaca</th>
                <th>Detalji</th>
              </tr>
            </thead>
            <tbody>
              {statistics.length > 0 ? (
                statistics.map((item, index) => (
                  <tr key={index} className="hover:bg-base-300">
                    <th>{index + 1}</th>
                    <th>{item.training.trainingType?.trainingType || "N/A"}</th>
                    <th>
                      {item.training.coach?.firstName || ""}{" "}
                      {item.training.coach?.lastName || ""}
                    </th>
                    <th>
                      {formatDate(item.training.startDate)}
                      {"-"}
                      {formatTime(item.training.endDate)}
                    </th>
                    <th>{item.numOfExercises}</th>
                    <th>
                      <button
                        className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
                        onClick={() => openModal(item)}
                      >
                        Detalji
                      </button>
                    </th>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>Učitavanje podataka...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <TrainingDetailsModal
          training={selectedTraining}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default StatistikaTrenera;
