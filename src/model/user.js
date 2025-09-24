import { Role } from "./roleModel";

export function createUser(data) {
  return {
    id: data.id,
    username: data.username,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
    phoneNumber: data.phoneNumber,
    dateOfBirth: new Date(data.dateOfBirth),
    role: Role[data.role],
    token: data.token,
  };
}
