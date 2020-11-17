import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  cover: {
    width: 151,
  },
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: "1",
  },
  toolbar: theme.mixins.toolbar,
}));
