import { Button, Typography } from "@material-ui/core";
import React from "react";

export const Home = ({ history }) => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    history.push("/signin");
  };
  return (
    <>
      <Typography>Hello people</Typography>
      <Button onClick={handleLogOut}>Log Out</Button>
    </>
  );
};
