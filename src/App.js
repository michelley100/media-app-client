import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { NavbarWithRouter } from "./Components/Navbar/Navbar";
import { useStyles } from "./Components/Navbar/useStyles";
import { Home } from "./Home";
import { SongAdd } from "./Pages/Songs/SongAdd";
import { SongUpdate } from "./Pages/Songs/SongUpdate";
import { UsersList } from "./Pages/Users/UserList";
import { UserUpdate } from "./Pages/Users/UserUpdate";

export const App = ({ history }) => {
  const classes = useStyles();
  return (
    <>
      <NavbarWithRouter />
      <div className={classes.toolbar}></div>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/song/add" component={SongAdd} />
        <Route path="/song/update/:id" component={SongUpdate} />
        <Route path="/users/list" component={UsersList} />
        <Route path="/user/update/:id" component={UserUpdate} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
};
