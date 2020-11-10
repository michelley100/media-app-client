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

export const UsersList = ({ history }) => {
  const classes = useStyles();
  const [users, setusers] = useState(null);
  const [load, setload] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const token = localStorage.getItem("token");
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        url: "https://localhost:8090/user/",
      };
      try {
        const { data } = await Axios(options);
        setusers(data);
        console.log(data);

        setload(false);
      } catch (e) {
        console.log(e);
      }
    };
    getUsers();
  }, []);

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
      const newUsersList = users.filter(({ _id }) => {
        return _id !== id; //from front end
      });
      setusers(newUsersList);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid container spacing={1} direction="column">
      <Grid item spacing={3}>
        <Typography>Users List</Typography>
      </Grid>
      <Grid container spacing={4}>
        {!load &&
          users.map((user) => {
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
                      <Typography component="h5" variant="h5">
                        {user.firstName} {user.lastName}
                      </Typography>

                      <CardMedia
                        className={classes.media}
                        image="https://images.ctfassets.net/cnu0m8re1exe/2elnw1rJ0HL8QqPOd3OtH5/c5b25256f2f8c7ba398ef21a2ca6504d/Kid-Thinking.jpg?w=650&h=433&fit=fill"
                      ></CardMedia>
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
                          onClick={() =>
                            history.push(`/user/update/${user._id}`)
                          }
                        >
                          <Update />
                        </IconButton>
                      </CardActions>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            );
          })}
      </Grid>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={() => history.push("/home")}
      >
        HOME
      </Button>
    </Grid>
  );
};
