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
import { ConfirmDialog } from "./ConfirmDialog";
import VideoPlayer from 'react-video-js-player';
import Vid from "../../videos/Norway.mp4"

export const SongCard = ({ song, history, refresh, ...rest }) => {
  const classes = useStyles();
  const videoSrc = Vid;
  const poster = "https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg"



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

  const [showConfirmModal, hideConfirmModal] = useModal(
    ({ in: open, onExited }) => (
      <ConfirmDialog
        open={open}
        onExited={onExited}
        title="Delete Song?"
        confirmLabel="Delete Song"
        id={song._id}
        name={song.title}
        description={`Do you really want to delete ${song.title}?`}
        onConfirm={() => songDelete()}
        onCancel={hideConfirmModal}
        refresh={refresh}
      >
        {/* <Typography> Do you really want to delete {song.title}? </Typography> */}
      </ConfirmDialog>
    ),
    [song]
  );

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
          {/* <CardMedia
            className={classes.cover}
            image="https://a10.gaanacdn.com/images/albums/96/1506996/crop_175x175_1506996.jpg"
          /> */}
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
            {/* <IconButton onClick={() => songDelete(song._id)}>
              <Delete />
            </IconButton> */}
            <IconButton onClick={showConfirmModal}>
              <Delete />
            </IconButton>
            <IconButton onClick={showEditModal}>
              <Update />
            </IconButton>
            {/* <IconButton
              onClick={() => history.push(`/song/update/${song._id}`)}
            >
              <Update />
            </IconButton> */}
            <VideoPlayer
              src={Vid}
              poster={poster}
              width="320"
              height="120"
            />
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};
