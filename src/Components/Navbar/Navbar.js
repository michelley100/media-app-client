import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { SideBarWithRouter } from "./SideBar";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
  },
}));

const Navbar = ({ history }) => {
  const classes = useStyles();

  const [opened, setOpened] = useState(false);

  const handleDrawerToggle = () => {
    setOpened(!opened);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography>Jingrwai</Typography>

          <IconButton>
            <Search />
          </IconButton>
          <div className={classes.root}></div>
          <Button color="inherit">LOGIN</Button>
        </Toolbar>
      </AppBar>
      <SideBarWithRouter opened={opened} toggleDrawer={handleDrawerToggle} />
    </div>
  );
};

export const NavbarWithRouter = withRouter(Navbar);
