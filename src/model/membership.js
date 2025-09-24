import { paymentStatus } from "./paymentStatus";
import { trainingPackage } from "./trainingPackage";
import { user } from "./user";

export function createMembership(data) {
  return {
    id: data.id,
    trainingPackage: trainingPackage[data.trainingPackage],
    numOfRemainingTrainings: data.numOfRemainingTrainings,
    paymentStatus: paymentStatus[data.paymentStatus],
    user: user[data.user],
    startDate: new Date(data.startDate),
    endDate: new Date(data.endDate),
  };
}
