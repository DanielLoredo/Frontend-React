import React, { useContext, useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import UserContext from "../../Shared/UserContext";

// TODO: Refactor component to be re-used by others
function Home() {
  const { userInfo } = useContext(UserContext);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  // TODO: Make styled components to re-use
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "rgba(0,0,0, 0.05)",
      }}
    >
      <Grid
        container
        padding={!isMobile ? "6rem 1rem 1rem 7rem" : "6rem 1rem 1rem 1rem"}
      >
        <Grid item xs={12} md={8} padding="1rem">
          <Box
            sx={{
              height: "40vh",
              backgroundColor: "#ffffff",
              borderRadius: "2rem",
              boxShadow: "0.3rem 0.3rem 1rem 0.3rem rgba(0, 0, 0, 0.05)",
            }}
          ></Box>
        </Grid>

        <Grid item xs={12} md={4} padding="1rem">
          <Box
            sx={{
              height: "40vh",
              backgroundColor: "#ffffff",
              borderRadius: "2rem",
              boxShadow: "0.3rem 0.3rem 1rem 0.3rem rgba(0, 0, 0, 0.05)",
            }}
          ></Box>
        </Grid>

        <Grid item xs={6} padding="1rem">
          <Box
            sx={{
              height: "40vh",
              backgroundColor: "#ffffff",
              borderRadius: "2rem",
              boxShadow: "0.3rem 0.3rem 1rem 0.3rem rgba(0, 0, 0, 0.05)",
            }}
          ></Box>
        </Grid>

        <Grid xs={6} padding="1rem">
          <Box
            sx={{
              height: "40vh",
              backgroundColor: "#ffffff",
              borderRadius: "2rem",
              boxShadow: "0.3rem 0.3rem 1rem 0.3rem rgba(0, 0, 0, 0.05)",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default React.memo(Home);
