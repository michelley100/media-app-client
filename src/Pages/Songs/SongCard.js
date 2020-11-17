import React from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import Axios from "axios";
import { useEffect, useState } from "react";
import { useStyles } from "./useStyles";

export const SongCard = ({ song, history, refresh }) => {
  const classes = useStyles();

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
              {song.comment.slice(0, 33).concat("...")}
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
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};
