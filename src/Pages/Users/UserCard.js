import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useStyles } from "./useStyles";

export const UserCard = ({ user, history, refresh }) => {
  const classes = useStyles();
  const [users, setusers] = useState(null);

  const UserDelete = async (id) => {
    const token = localStorage.getItem("token");
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `https://localhost:8090/user/${id}`,
    };
    try {
      const { data } = await Axios(options); //from db
      //   const newUsersList = users.filter(({ _id }) => {
      //     return _id !== id; //from front end
      //   });
      //   setusers(newUsersList);
      refresh();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid
      item
      xs={11}
      sm={6}
      md={3}
      lg={3}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Paper elevation={1}>
        <Card className={classes.root}>
          <CardContent>
            

            <CardMedia
              className={classes.media}
              image="https://images.ctfassets.net/cnu0m8re1exe/2elnw1rJ0HL8QqPOd3OtH5/c5b25256f2f8c7ba398ef21a2ca6504d/Kid-Thinking.jpg?w=650&h=433&fit=fill"
            ></CardMedia>
            <Typography component="h6" variant="h6">
              {user.firstName.length >= 18
                ? user.firstName.slice(0, 17).concat("...")
                : user.firstName.length >= 10 && user.firstName.length <= 17
                ? user.firstName + " " + user.lastName.slice(0, 6).concat("...")
                : user.firstName <= 10
                ? user.firstName + " " + user.lastName.slice(0, 4).concat("...")
                : user.firstName + " " + user.lastName.slice(0, 10)}
            </Typography>
            <Card>
              <Typography variant="subtitle1" color="textSecondary">
                {user.email}
              </Typography>
            </Card>
            <CardActions disableSpacing>
              <IconButton onClick={() => UserDelete(`${user._id}`)}>
                <Delete />
              </IconButton>
              <IconButton
                onClick={() => history.push(`/user/update/${user._id}`)}
              >
                <Update />
              </IconButton>
            </CardActions>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};
