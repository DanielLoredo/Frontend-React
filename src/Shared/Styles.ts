import styled from "@emotion/styled";
import { Grid, Button } from "@mui/material";

export const ImageContainer = styled(Grid)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
}));

export const LogoIcon = styled("img")(({ theme }) => ({
  height: "4rem",
  width: "auto",
  padding: "1rem",
}));

export const LogoIconSmall = styled("img")(({ theme }) => ({
  height: "3rem",
  width: "auto",
}));

export const ButtonWithRadius = styled(Button)(({ theme }) => ({
  borderRadius: "1rem",
}));
