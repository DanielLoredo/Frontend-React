import React, { useState, useEffect, FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Grid } from "@mui/material";

import { UserType } from "../../Types/UserTypes";
import { DrawerLargeSize, DrawerMobileSize } from "./AppBarList";

const ButtonAppBar: FC<UserType> = ({ matricula, name, role }): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const toggle =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      setToggleDrawer(open);
    };

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

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Grid item container flexDirection="row" alignItems="center">
                {isMobile ? (
                  <DrawerMobileSize
                    toggleDrawer={toggleDrawer}
                    toggle={toggle}
                  />
                ) : (
                  <></>
                )}
                <Grid item>
                  <Typography
                    color="primary"
                    fontWeight={600}
                    fontSize="1.8rem"
                    padding={!isMobile ? "1rem 0 1rem 7rem" : ""}
                  >
                    RecSports Website
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <Grid item container flexDirection="row" alignItems="center">
                {/* Right text */}
                <Grid item>
                  <Grid container flexDirection="column" alignItems="center">
                    <Grid item>
                      <Typography
                        variant="body1"
                        color="primary"
                        fontWeight={700}
                        lineHeight="1rem"
                      >
                        {name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body2"
                        color="primary"
                        fontWeight={400}
                        lineHeight="1rem"
                      >
                        {role}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item paddingLeft="1rem">
                  <Button color="primary" variant="contained">
                    <AccountCircleIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {!isMobile ? <DrawerLargeSize /> : <></>}
    </Box>
  );
};

export default React.memo(ButtonAppBar);
