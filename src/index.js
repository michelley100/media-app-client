import { Button, CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AuthoriseRoute } from "./AuthoriseRoute";
import { Home } from "./Home";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <AuthoriseRoute path="/home" component={Home} />
      <Redirect to="/signup" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
