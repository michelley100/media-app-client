import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    // paddingTop: "56.25%", // 16:9
  },
  cover: {
    // width: "flex",
    height: 140,
  },

  grow: {
    flexGrow: "1",
  },
  // toolbar: theme.mixins.toolbar,
});
