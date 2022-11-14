import { StudentsInterface } from "./db-student.model";

export interface SessionInterface {
  account: AccountType | "invitado"
  authentication: boolean,
  admin: boolean
}
export type AccountType = StudentsInterface | "admin";
export type SessionType = "admin" | "authentication";