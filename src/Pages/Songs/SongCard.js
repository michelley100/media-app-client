import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import Axios from "axios";
import { useStyles } from "./useStyles";
import { useModal } from "react-modal-hook";
import { SongFormDialog } from "./SongFormDialog";

export const SongCard = ({ song, history, refresh, ...rest }) => {
  const classes = useStyles();

  const [showEditModal, hideEditModal] = useModal(({ in: open, onExited }) => (
    <SongFormDialog
      open={open}
      onExited={onExited}
      onClose={hideEditModal}
      id={song._id}
      isEdit
      refresh={refresh}
    />
  ));

  const songDelete = async () => {
    const token = localStorage.getItem("token");
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
      url: `https://localhost:8090/song/${song._id}`,
    };
    try {
      const { data } = await Axios(options);
      refresh();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid item xs={11} sm={6} md={6} lg={4} key={song._id}>
      <Paper elevation={2}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.cover}
            image="https://a10.gaanacdn.com/images/albums/96/1506996/crop_175x175_1506996.jpg"
          />
          <CardContent>
            <Typography variant="h5">
              {song.title.length < 8
                ? song.title
                : song.title.substring(0, 17).concat("...")}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {song.artist}
            </Typography>
            <Typography variant="caption" color="textSecondary" display="block">
              {song.genre}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {song.comment.length < 26
                ? song.comment
                : song.comment.slice(0, 26).concat("...")}
            </Typography>
            <div className={classes.grow}></div>
            <IconButton onClick={() => songDelete(song._id)}>
              <Delete />
            </IconButton>
            <IconButton
              onClick={() => history.push(`/song/update/${song._id}`)}
            >
              <Update />
            </IconButton>
            <IconButton onClick={showEditModal}>
              <Update />
            </IconButton>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};
