import { Grid, Typography } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { UserCard } from "./UserCard";

export const UsersList = ({ history, user }) => {
  const [users, setusers] = useState(null);
  const [load, setload] = useState(true);
  const [reload, setReload] = useState(false);

  const refresh = () => {
    setReload(!reload);
  };

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
  }, [refresh]);

  return (
    <Grid container spacing={1} direction="column">
      <Grid item spacing={3}>
        <Typography>Users List</Typography>
      </Grid>
      <Grid container spacing={4}>
        {!load &&
          users.map((user) => {
            return (
              <UserCard
                {...{ user }}
                {...users}
                history={history}
                refresh={refresh}
              />
            );
          })}
      </Grid>
    </Grid>
  );
};
