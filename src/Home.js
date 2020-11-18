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
import { SongCard } from "./Pages/Songs/SongCard";
import { useStyles } from "./Components/Navbar/useStyles";

export const Home = ({ history }) => {
  const classes = useStyles();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    history.push("/unauth");
  };

  const [songs, setSongs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  const refresh = () => {
    setReload(!reload);
  };

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
  }, [reload]);

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
                <SongCard
                  {...{ song }}
                  key={song._id}
                  history={history}
                  refresh={refresh}
                />
              );
            })}
        </Grid>
      </Box>
    </Grid>
  );
};
