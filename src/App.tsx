import { useState } from "react";
import AppBar from "./Components/AppBar/AppBar";
import { Routes, Route } from "react-router-dom";
import { ProtectedRouter } from "./Utils/ProtectedRoute";
import { UserRole, UserType } from "./Types/UserTypes";
import UserContext from "./Shared/UserContext";

import { ThemeProvider } from "@mui/material";
import theme from "./Utils/Theme";

// Pages
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Gimnasio from "./Pages/Gimnasio/Gimnasio";

// TODO: 1. Refactor de component Home y boilerplate de otras paginas
// TODO: 2. Arreglar ruteo (para el Login y otras paginas)
// TODO: 3. Manejo de usuarios dentro de la aplicacion por roles (Navbar)
// TODO: 4. Guardar el usuario en cache por si entra directo a alghuna pagina o algo asi
// TODO: 5. Seguir con la pagina de Home

function App() {
  const [currentUser, setCurrentUser] = useState<UserType>({
    matricula: "",
    name: "",
    role: UserRole.Alumno,
  });

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider
        value={{ userInfo: currentUser, setUserInfo: setCurrentUser }}
      >
        {currentUser.matricula === "" ? (
          <></>
        ) : (
          <AppBar
            matricula={currentUser.matricula}
            name={currentUser.name}
            role={UserRole.Admin}
          ></AppBar>
        )}

        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route
            element={
              <ProtectedRouter
                isAllowed={
                  currentUser.matricula !== "" &&
                  currentUser.role === UserRole.Alumno
                }
              />
            }
          >
            <Route path="/inicio" element={<Home />} />
            <Route path="/gimnasio" element={<Gimnasio />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
