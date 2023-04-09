import React, { FC } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MarkChatReadOutlinedIcon from "@mui/icons-material/MarkChatReadOutlined";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";
import { Drawer, Grid, IconButton } from "@mui/material";
import { ImageContainer, LogoIconSmall } from "../../Shared/Styles";

// TODO change icons to a re-used component
const NavigationList = [
  {
    title: "Inicio",
    icon: (
      <HomeOutlinedIcon fontSize="large" sx={{ transform: "scale(1.2)" }} />
    ),
    navigateTo: "/inicio",
  },
  {
    title: "Gimnasio",
    icon: (
      <FitnessCenterOutlinedIcon
        fontSize="large"
        sx={{ transform: "scale(1.2)" }}
      />
    ),
    navigateTo: "/gimnasio",
  },
  {
    title: "Deportes",
    icon: (
      <SportsBasketballOutlinedIcon
        fontSize="large"
        sx={{ transform: "scale(1.2)" }}
      />
    ),
    navigateTo: "/deportes",
  },
  {
    title: "Calendario",
    icon: (
      <CalendarTodayOutlinedIcon
        fontSize="large"
        sx={{ transform: "scale(1.2)" }}
      />
    ),
    navigateTo: "/calendario",
  },
  {
    title: "Noticias",
    icon: (
      <NewspaperOutlinedIcon
        fontSize="large"
        sx={{ transform: "scale(1.2)" }}
      />
    ),
    navigateTo: "/noticias",
  },
  {
    title: "Mapa",
    icon: <MapOutlinedIcon fontSize="large" sx={{ transform: "scale(1.2)" }} />,
    navigateTo: "/mapa",
  },
  {
    title: "Encuesta",
    icon: (
      <MarkChatReadOutlinedIcon
        fontSize="large"
        sx={{ transform: "scale(1.2)" }}
      />
    ),
    navigateTo: "/encuesta",
  },
];

const DrawerList = () => {
  return (
    <List>
      {NavigationList.map((item) => (
        <ListItem key={item.title} sx={{ padding: 0 }}>
          <ListItemButton>
            <Link
              to={item.navigateTo}
              style={{
                textDecoration: "none",
                color: "black",
                width: "100%",
              }}
            >
              <Grid
                container
                flexDirection="column"
                alignItems="center"
                padding="0.8rem 0 0.5rem 0"
              >
                <Grid item>{item.icon}</Grid>
                <Grid item lineHeight="1rem" fontSize="0.9rem">
                  {item.title}
                </Grid>
              </Grid>
            </Link>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

// Drawer for computer size
export const DrawerLargeSize = () => {
  return (
    <Drawer variant="permanent">
      <ImageContainer padding="1rem 0 0 0">
        <LogoIconSmall src="./recsports_logo.png" alt="recsports logo" />
      </ImageContainer>
      <Box paddingTop="1rem">{DrawerList()}</Box>
    </Drawer>
  );
};

// Drawer for mobile size
interface DrawerMobileProps {
  toggleDrawer: boolean;
  toggle: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const DrawerMobileSize: FC<DrawerMobileProps> = ({
  toggleDrawer,
  toggle,
}): JSX.Element => {
  return (
    <Grid>
      <IconButton
        size="large"
        edge="start"
        color="primary"
        aria-label="menu"
        onClick={toggle(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={toggleDrawer} onClose={toggle(false)}>
        <ImageContainer padding="1rem 0 0 0">
          <LogoIconSmall src="./recsports_logo.png" alt="recsports logo" />
        </ImageContainer>
        <Box
          sx={{ width: "auto" }}
          role="presentation"
          onClick={toggle(false)}
          onKeyDown={toggle(false)}
        >
          {DrawerList()}
        </Box>
      </Drawer>
    </Grid>
  );
};
