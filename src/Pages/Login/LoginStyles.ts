import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const BackgroundImage = styled("img")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage:
    "linear-gradient( to bottom, rgba(59, 61, 74, 0.52), rgba(3, 3, 3, 0.73)), url('./login_background.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: "-1",
}));

export const LoginContainer = styled(Grid)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  padding: "1rem 2rem 1rem 2rem",
  borderRadius: "2rem",
  boxShadow: "0 0 3rem rgba(0, 0, 0, 0.5)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
