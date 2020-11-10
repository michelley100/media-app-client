import { Button, CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AuthoriseRoute } from "./Auth/AuthoriseRoute";
import { Home } from "./Home";
import { SignIn } from "./Auth/SignIn";
import { SignUp } from "./Auth/SignUp";
import { SongAdd } from "./Pages/Songs/SongAdd";
import { SongUpdate } from "./Pages/Songs/SongUpdate";
import { UnAuthoriseRoute } from "./Auth/UnauthoriseRoute";
import { UsersList } from "./Pages/Users/UserList";
import { UserUpdate } from "./Pages/Users/UserUpdate";

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <Switch>
      <UnAuthoriseRoute path="/signup" component={SignUp} />
      <UnAuthoriseRoute path="/signin" component={SignIn} />
      <AuthoriseRoute path="/home" component={Home} />
      <AuthoriseRoute path="/song/add" component={SongAdd} />
      <AuthoriseRoute path="/song/update/:id" component={SongUpdate} />
      <AuthoriseRoute path="/users/list" component={UsersList} />
      <AuthoriseRoute path="/user/update/:id" component={UserUpdate} />

      <Redirect to="/signup" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
