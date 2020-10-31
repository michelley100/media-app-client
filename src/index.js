import { Button, CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Redirect to="/signup" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
