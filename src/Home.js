import {
  AppBar,
  Box,
  Button,
  Card,
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
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
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

export const Home = ({ history }) => {
  const classes = useStyles();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    history.push("/unauth");
  };

  const [songs, setSongs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSongs = async () => {
      const token = localStorage.getItem("token");
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
        url: "https://localhost:8090/song",
      };
      try {
        const { data } = await Axios(options);
        setSongs(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    getSongs();
  }, []);

  const songDelete = async (id) => {
    const token = localStorage.getItem("token");
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
      url: `https://localhost:8090/song/${id}`,
    };
    try {
      const { data } = await Axios(options); //delete from db
      //disappear from frontend after delete
      const newSongs = songs.filter(({ _id }) => {
        return _id !== id;
      });
      setSongs(newSongs);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid container spacing={2} direction="column">
      <Box m={2}>
        <Grid item xs={2}>
          <Typography>Songs</Typography>
        </Grid>
      </Box>
      <Box mx={2}>
        <Grid item container spacing={4}>
          {!loading &&
            songs.map((song) => {
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
                        <Typography
                          variant="caption"
                          color="textSecondary"
                          display="block"
                        >
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
                          onClick={() =>
                            history.push(`/song/update/${song._id}`)
                          }
                        >
                          <Update />
                        </IconButton>
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Grid>
  );
};
