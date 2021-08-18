import {
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
} from "@material-ui/core";
//   import { Delete, Update } from "@material-ui/icons";
import Axios from "axios";
import React, { useEffect, useState } from "react";
//   import { SongCard } from "./Pages/Songs/SongCard";
import { useStyles } from "../../Components/Navbar/useStyles";
//   import { useModal } from "react-modal-hook";
//   import { SongForm } from "./Pages/Songs/SongForm";
//   import { SongFormDialog } from "./Pages/Songs/SongFormDialog";
import VideoPlayer from "react-video-js-player";

export const YoutubeVideos = () => {
  const classes = useStyles();

  const [songs, setSongs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  //videojs
  // const videoSrc1 = Vid1;
  // const videoSrc2 = Vid2;

   
  const refresh = () => {
    setReload((reload) => !reload);
  };

  return (
    <>
      <Grid container spacing={2} direction="column">
        <Box m={2}>
          <Grid item xs={2}>
            <Typography>Videos</Typography>
          </Grid>
        </Box>

        <Box mx={2}>
          <Paper elevation={2}>
            <Card className={classes.root}>
              <div>
                <Typography variant="h6">Bella Camp</Typography>
                <Typography variant="h6">Behold</Typography>

                <CardContent>
                  <div className={classes.grow}></div>

                  {/* <VideoPlayer 
                    src={Vid1}
                    width="620"
                    height="320"
                    playbackRates={[0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3]}
                  /> */}

                  <iframe
                    width="620"
                    height="320"
                    src="https://www.youtube.com/embed/nbFcZNY6geY?list=RDnbFcZNY6geY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </CardContent>
              </div>
            </Card>
          </Paper>
          {/* ///////////////////////////////////////////// */}
          <Paper elevation={2}>
            <Card className={classes.root}>
              <div>
                <Typography variant="h6">Chris Tomlin</Typography>
                <Typography variant="h6">Be the moon</Typography>

                <CardContent>
                  <div className={classes.grow}></div>

                  {/* <VideoPlayer 
                    src={Vid2}
                    // poster={poster2}
                    width="620"
                    height="320"
                    playbackRates={[0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3]}
                  />*/}

                  <iframe
                    width="620"
                    height="320"
                    src="https://www.youtube.com/embed/Sejv8a-vCyc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>

                </CardContent>
              </div>
            </Card>
          </Paper>
        </Box>
      </Grid>
    </>
  );
};
