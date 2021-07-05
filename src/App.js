import { CssBaseline, makeStyles } from "@material-ui/core";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { NavbarWithRouter } from "./Components/Navbar/Navbar";
import { Home } from "./Home";
import { SongAdd } from "./Pages/Songs/SongAdd";
import { SongUpdate } from "./Pages/Songs/SongUpdate";
import { UsersList } from "./Pages/Users/UserList";
import { UserUpdate } from "./Pages/Users/UserUpdate";
import { useStyles } from "./Components/Navbar/useStyles";
import { VideoPlaying } from "./Pages/VideoPlaying/VideoPage.js";


export const App = ({ history }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <NavbarWithRouter />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/videoplaying" component={VideoPlaying} />
            <Route path="/song/add" component={SongAdd} />
            <Route path="/song/update/:id" component={SongUpdate} />
            <Route path="/users/list" component={UsersList} />
            <Route path="/user/update/:id" component={UserUpdate} />
            <Redirect to="/404" />
          </Switch>
        </main>
      </div>
    </>
  );
};
