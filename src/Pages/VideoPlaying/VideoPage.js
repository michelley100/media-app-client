import { Box, Button, Grid, Typography,  Card,
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
  import VideoPlayer from 'react-video-js-player';
  import Vid1 from "./videos/CASTINGCROWNS1.mp4"
  import Vid2 from "./videos/Mercyme_Flawless.mp4"
  
  
  export const VideoPlaying = () => {
    const classes = useStyles();
  
    const [songs, setSongs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);
  
    //videojs
    const videoSrc1 = Vid1;
    const videoSrc2 = Vid2;
    
    const poster1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDml9cLwM7DaTyno31ekw4DPZkFQEVTMHkBSFJro49xIpA3qnHfXGHSxJpIEH_Ak6pZW8&usqp=CAU"
    const poster2 = "https://images-na.ssl-images-amazon.com/images/I/71c1wtCTcsL._AC_UL600_SR600,600_.jpg"
  
  
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
            <Typography variant="h4">Voice of Truth</Typography>
            <Typography variant="h6">Casting Crowns</Typography>

          
            
            <CardContent>
              <div className={classes.grow}></div>
              
              <VideoPlayer
            src={Vid1}
            poster={poster1}
            width="620"
            height="320"
          playbackRates={[0.5,0.75,1,1.25,1.5,1.75,2,2.5,3]}

            />

          
            </CardContent>
            </div>
            
          </Card>
          </Paper>
  {/* ///////////////////////////////////////////// */}
          <Paper elevation={2}>
          <Card className={classes.root}>
            <div>
          <Typography variant="h4">Flawless</Typography>
          <Typography variant="h6">MercyMe</Typography>
  
              <CardContent>
            
              <div className={classes.grow}></div>
              
              <VideoPlayer
            src={Vid2}
            poster={poster2}
            width="620"
            height="320"
            playbackRates={[0.5,0.75,1,1.25,1.5,1.75,2,2.5,3]}
            />
            
            </CardContent>
            </div>
          </Card>
        </Paper>
        
  
        </Box>  
        </Grid>
      </>
    );
  };
  