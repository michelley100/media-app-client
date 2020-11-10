import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
  },
}));

export const Navbar = ({ history }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <IconButton>
            <Search />
          </IconButton>
          <div className={classes.root}></div>
          <Button color="inherit">LOGIN</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
