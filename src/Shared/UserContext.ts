import { createContext } from "react";
import { UserRole, UserType } from "../Types/UserTypes";

const UserContext = createContext({
  userInfo: {
    matricula: "",
    name: "",
    role: UserRole.Alumno,
  },
  setUserInfo: (userInfo: UserType) => {},
});

export default UserContext;
