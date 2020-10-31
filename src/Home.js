import { Button, Typography } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";

export const Home = ({ history }) => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    history.push("/signin");
  };
  return (
    <>
      <Typography>Hello people</Typography>
      <Button
        fullWidth
        variant="text"
        color="secondary"
        onClick={() => history.push("/song")}
      >
        Song
      </Button>

      <Button onClick={handleLogOut}>Log Out</Button>
    </>
  );
};
