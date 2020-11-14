import { LinearProgress } from "@material-ui/core";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const UnAuth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleLoading = () => {
    setIsLoading((isLoading) => !isLoading);
  };
  return (
    <>
      {isLoading && <LinearProgress />}
      <Switch>
        <Route exact path="/unauth/signup">
          {(props) => {
            return <SignUp toggleLoading={handleToggleLoading} {...props} />;
          }}
        </Route>
        <Route exact path="/unauth">
          {(props) => {
            return <SignIn toggleLoading={handleToggleLoading} {...props} />;
          }}
        </Route>
      </Switch>
    </>
  );
};
