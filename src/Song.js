import { Button } from "@material-ui/core";
import React from "react";

export const Song = ({ history }) => {
  return (
    <>
      <>Songs here</>
      <Button
        fullWidth
        variant="text"
        color="primary"
        onClick={() => history.push("/home")}
      >
        Home
      </Button>
    </>
  );
};
