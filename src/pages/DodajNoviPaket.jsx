import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewTrainingPacket,
  getTrainingTypes,
} from "../features/training/trainingThunks";

function DodajNoviPaket() {
  const dispatch = useDispatch();
  const { trainingTypes } = useSelector((state) => state.training);

  const [selectedId, setSelectedId] = useState("");
  const [numberOfTrainings, setNumberOfTrainings] = useState("");

  useEffect(() => {
    dispatch(getTrainingTypes());
  }, [trainingTypes.length]);

  const handleChange = (e) => {
    setSelectedId(e.target.value);
  };

  const selectedType =
    Array.isArray(trainingTypes) &&
    trainingTypes.find((t) => t.id === Number(selectedId));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedType) {
      alert("Molim te izaberi tip treninga.");
      return;
    }

    dispatch(
      addNewTrainingPacket({
        trainingType: {
          id: selectedType.id,
          trainingType: selectedType.trainingType,
        },
        numOfTrainings: numberOfTrainings,
      })
    );

    setSelectedId("");
    setNumberOfTrainings("");
  };

  return (
    <div className="w-[40%] m-auto">
      <h1 className="text-xl text-center font-semibold mb-10">
        Napravi novi paket članarine
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <p>Tip treninga:</p>
          {Array.isArray(trainingTypes) && trainingTypes.length > 0 && (
            <select
              value={selectedId}
              onChange={handleChange}
              disabled={
                !Array.isArray(trainingTypes) || trainingTypes.length === 0
              }
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            >
              <option value="">-- Učitavanje tipova treninga --</option>
              {trainingTypes?.map((type) => (
                <option key={type.id} value={type.id} className="text-black">
                  {type.id}. {type.trainingType}
                </option>
              ))}
            </select>
          )}
        </div>
        <div>
          <p>Broj treninga:</p>
          <input
            type="number"
            placeholder="Unesi broj treninga"
            value={numberOfTrainings}
            onChange={(e) => setNumberOfTrainings(e.target.value)}
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
