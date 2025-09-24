import { traningType } from "./trainingType";

export function createTrainingPackage(data) {
  return {
    id: data.id,
    trainingType: traningType[data.trainingType],
    numberOfTrainings: data.numberOfTrainings,
  };
}
