export enum UserRole {
  Alumno = "alumno",
  Entrenador = "entrenador",
  Admin = "admin",
}

export interface UserType {
  matricula: string;
  name: string;
  role: UserRole;
}
