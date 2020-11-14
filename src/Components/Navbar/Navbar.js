import {
  AppBar,
  Button,
  IconButton,
  ListItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ExitToApp, Search } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { SideBarWithRouter } from "./SideBar";
import { withRouter } from "react-router-dom";
import { useStyles } from "./useStyles";

const Navbar = ({ history }) => {
  const classes = useStyles();

  const [opened, setOpened] = useState(false);

  const LogOut = () => {
    localStorage.removeItem("token");
    history.push("/unauth");
  };

  const handleDrawerToggle = () => {
    setOpened(!opened);
  };
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <ListItem>
            <Button
              color="inherit"
              button
              key="text"
              onClick={() => {
                history.push("/home");
              }}
            >
              <Typography>Jingrwai</Typography>
            </Button>
          </ListItem>

          <IconButton>
            <Search />
          </IconButton>
          <div className={classes.root}></div>
          <IconButton
            color="inherit"
            onClick={() => {
              localStorage.removeItem("token");
              history.push("/home");
            }}
          >
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideBarWithRouter opened={opened} toggleDrawer={handleDrawerToggle} />
    </div>
  );
};

export const NavbarWithRouter = withRouter(Navbar); //to get access to props(history)
