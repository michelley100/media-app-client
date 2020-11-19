import { CssBaseline } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AuthoriseRoute } from "./Auth/AuthoriseRoute";
import { UnAuthoriseRoute } from "./Auth/UnauthoriseRoute";
import { NotFound } from "./Errors/NotFound";
import { UnAuth } from "./Auth/UnAuth";
import { App } from "./App";
import { TransitionGroup } from "react-transition-group";
import { ModalProvider } from "react-modal-hook";

ReactDOM.render(
  <ModalProvider rootComponent={TransitionGroup}>
    <BrowserRouter>
      <CssBaseline />
      <Switch>
        <Route exact path="/404" component={NotFound} />
        <UnAuthoriseRoute path="/unauth" component={UnAuth} />
        <AuthoriseRoute path="/" component={App} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  </ModalProvider>,
  document.getElementById("root")
);
