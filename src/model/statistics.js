import { training } from "./training";

export function createStatistics(data) {
  return {
    training: training[data.training],
    numberOfExercises: data.numberOfExercises,
  };
}
