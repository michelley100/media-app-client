import { Button, CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AuthoriseRoute } from "./AuthoriseRoute";
import { Home } from "./Home";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Song, SongAdd } from "./SongAdd";
import { SongUpdate } from "./SongUpdate";
import { UnAuthoriseRoute } from "./UnauthoriseRoute";

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <Switch>
      <UnAuthoriseRoute path="/signup" component={SignUp} mich="ddd" />
      <UnAuthoriseRoute path="/signin" component={SignIn} />
      <AuthoriseRoute path="/home" component={Home} />
      <AuthoriseRoute path="/song/add" component={SongAdd} />
      <AuthoriseRoute path="/song/update/:id" component={SongUpdate} />

      <Redirect to="/signup" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
