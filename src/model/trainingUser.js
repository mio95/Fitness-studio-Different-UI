import { user } from "./user";
import { training } from "./training";
import { trainingUserStatus } from "./trainingUserStatus";

export function createTrainingUser(data) {
  return {
    id: data.id,
    user: user[data.user],
    training: training[data.training],
    trainingUserStatus: trainingUserStatus[data.trainingUserStatus],
  };
}
