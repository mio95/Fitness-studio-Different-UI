import { useDateFormatter } from "../../hook/useDateFormatter";

const TrainingDetailsModal = ({ training, onClose }) => {
  const { formatDate } = useDateFormatter();
  if (!training) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-40 z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Detalji treninga</h2>

        <p>
          <strong>Tip treninga:</strong>{" "}
          {training.training?.trainingType?.trainingType}
        </p>
        <p>
          <strong>Trener:</strong> {training.training?.coach?.firstName}{" "}
          {training.training?.coach?.lastName}
        </p>
        <p>
          <strong>Početak:</strong> {formatDate(training.training?.startDate)}
        </p>
        <p>
          <strong>Kraj:</strong> {formatDate(training.training?.endDate)}
        </p>
        <p>TO DO:Treba resiti tabelu sa podacima ko je sve bio na treningu</p>

        {/* Treba resiti tabelu sa podacima ko je sve bio na treningu */}
        <table className="mt-4 w-full">
          <thead>
            <tr>
              <th className="text-left">Ime vezbaca</th>
              <th className="text-left">Prezime vezbaca</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ime vezbaca 1</td>
              <td>Prezime vezbaca 1</td>
              <td>Status 1</td>
            </tr>
            <tr>
              <td>Ime vezbaca 2</td>
              <td>Prezime vezbaca 2</td>
              <td>Status 2</td>
            </tr>
            <tr>
              <td>Ime vezbaca 3</td>
              <td>Prezime vezbaca 3</td>
              <td>Status 3</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-6 flex justify-end">
          <button className="btn btn-sm btn-secondary" onClick={onClose}>
            Zatvori
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetailsModal;
