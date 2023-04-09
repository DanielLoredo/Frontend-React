import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserRole } from "../../Types/UserTypes";
import UserContext from "../../Shared/UserContext";
import {
  Grid,
  Typography,
  FormControl,
  FilledInput,
  InputAdornment,
  IconButton,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { BackgroundImage, LoginContainer } from "./LoginStyles";
import {
  ImageContainer,
  LogoIcon,
  ButtonWithRadius,
} from "../../Shared/Styles";

function Login() {
  const { setUserInfo } = useContext(UserContext);

  const [isMouseOnMatricula, setIsMouseOnMatricula] = useState(false);
  const [isMouseOnContrasena, setIsMouseOnContrasena] = useState(false);

  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = () =>
    setUserInfo({
      matricula: "A01284184",
      name: "Daniel",
      role: UserRole.Alumno,
    });

  return (
    <Grid>
      <BackgroundImage />
      {/* HEADER */}
      <LoginContainer container item xs={11} sm={8} md={6} lg={3}>
        <Grid item>
          <Typography variant="h4" fontWeight={700}>
            RecSports
          </Typography>
          <ImageContainer>
            <LogoIcon src="./recsports_logo.png" alt="recsports logo" />
          </ImageContainer>
        </Grid>

        {/* Matricula */}

        <Grid item container xs={12} padding="1rem">
          <Grid item xs={12}>
            <Typography
              variant="h6"
              paddingBottom="0.5rem"
              color="rgba(0, 0, 0, 0.6)"
            >
              Matricula
            </Typography>
            <TextField
              autoComplete="off"
              fullWidth
              hiddenLabel
              id="filled-basic"
              variant="filled"
              value={isMouseOnMatricula || matricula ? matricula : "A0XXXXXXX"}
              onMouseDown={() => setIsMouseOnMatricula(true)}
              onChange={(e) => setMatricula(e.target.value)}
              InputProps={{
                style: {
                  fontSize: "1.2rem",
                  color: !matricula ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 1)",
                },
              }}
            />
          </Grid>

          {/* Contrasena */}
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                padding="1rem 0 0.5rem 0"
                color="rgba(0, 0, 0, 0.6)"
              >
                Contraseña
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="filled">
                <FilledInput
                  fullWidth
                  hiddenLabel
                  id="filled-adornment-password"
                  type={showPassword ? "text" : "password"}
                  value={
                    isMouseOnContrasena || password ? password : "Contraseña"
                  }
                  onMouseDown={() => setIsMouseOnContrasena(true)}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    fontSize: "1.2rem",
                    color: !password
                      ? "rgba(0, 0, 0, 0.2)"
                      : "rgba(0, 0, 0, 1)",
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        {/* Button */}
        <Grid item container xs={12} justifyContent="center">
          <Grid item xs={8} padding="1rem">
            <Link
              to="/"
              onClick={handleLogin}
              style={{ textDecoration: "none" }}
            >
              <ButtonWithRadius fullWidth variant="contained">
                <Typography variant="h5" fontWeight={500} textTransform="none">
                  Iniciar Sesión
                </Typography>
              </ButtonWithRadius>
            </Link>
          </Grid>
        </Grid>
      </LoginContainer>
    </Grid>
  );
}

export default React.memo(Login);
