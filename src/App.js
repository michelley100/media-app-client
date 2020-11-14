import { CssBaseline } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { UnAuth } from "./Auth/UnAuth";
import { NavbarWithRouter } from "./Components/Navbar/Navbar";
import { SideBar } from "./Components/Navbar/SideBar";
import { Home } from "./Home";
import { SongAdd } from "./Pages/Songs/SongAdd";
import { SongUpdate } from "./Pages/Songs/SongUpdate";
import { UsersList } from "./Pages/Users/UserList";
import { UserUpdate } from "./Pages/Users/UserUpdate";

export const App = ({ history }) => {
  return (
    <>
      <NavbarWithRouter />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/song/add" component={SongAdd} />
        <Route exact path="/song/update/:id" component={SongUpdate} />
        <Route exact path="/users/list" component={UsersList} />
        <Route exact path="/user/update/:id" component={UserUpdate} />
        <Redirect to="/404" />
      </Switch>
    </>
  );
};
