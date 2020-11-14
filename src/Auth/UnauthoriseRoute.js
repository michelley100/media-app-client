import React from "react";
import { Redirect, Route } from "react-router-dom";

export const UnAuthoriseRoute = ({ ...props }) => {
  console.log(props);
  if (localStorage.getItem("token")) {
    return <Redirect to="/home" />;
  }
  return <Route {...props} />;
};
