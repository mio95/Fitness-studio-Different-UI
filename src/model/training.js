import { trainingtype } from "./trainingType";
import { user } from "./user";

export function createTraining(data) {
  return {
    id: data.id,
    couch: user[data.couch],
    trainingType: trainingtype[data.trainingType],
    startDate: new Date(data.date),
    endDate: new Date(data.endDate),
    capacity: data.capacity,
    numberOfRemainingTrainings: data.numberOfRemainingTrainings,
  };
}
