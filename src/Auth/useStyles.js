import { makeStyles } from "@material-ui/core";
import { blueGrey, blue } from "@material-ui/core/colors";

export const useStyles = makeStyles({
  space: {
    marginTop: "100px",
  },
  background: {
    backgroundColor: blueGrey[500],
    height: "100vh",
  },

  signUpSpace: {
    marginTop: "80px",
  },
  signUpBackground: {
    backgroundColor: blue[700],
    minHeight: "100vh",
  },
});
