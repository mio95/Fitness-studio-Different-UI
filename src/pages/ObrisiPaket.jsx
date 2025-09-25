import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllTrainingPackages,
  deleteTrainingPacket,
} from "../features/traningPackage/traningPackageThunks";

function ObrisiPaket() {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState("");

  const { trainingPackages } = useSelector((state) => state.trainingPackage);

  useEffect(() => {
    dispatch(getAllTrainingPackages());
  }, []);

  useEffect(() => {
    console.log(trainingPackages);
  }, [trainingPackages]);

  const handleChange = (e) => {
    setSelectedId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(deleteTrainingPacket(selectedId))
      .unwrap()
      .then(() => {
        // posle uspešnog brisanja, ponovo pozovi API da osvežiš listu paketa
        dispatch(getAllTrainingPackages());
      });
  };

  return (
    <div className="w-[40%] m-auto">
      <h1 className="text-xl text-center font-semibold mb-10">
        Obriši paket članarine
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <p>Paket:</p>
          <select
            value={selectedId}
            onChange={handleChange}
            disabled={
              !Array.isArray(trainingPackages) || trainingPackages.length === 0
            }
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          >
            {!trainingPackages || trainingPackages.length === 0 ? (
              <option value="">-- Učitavanje paketa treninga --</option>
            ) : (
              trainingPackages?.map((trainingPackage) => (
                <option
                  key={trainingPackage.id}
                  value={trainingPackage.id}
                  className="text-black"
                >
                  {trainingPackage.id}.{" "}
                  {trainingPackage.trainingType.trainingType}
                  {" - Broj treninga: "}
                  {trainingPackage.numOfTrainings}
                </option>
              ))
            )}
          </select>
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
