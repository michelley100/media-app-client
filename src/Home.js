import { Button, Typography } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

export const Home = ({ history }) => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
    history.push("/signin");
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

  return (
    <>
      <Typography>Hello people</Typography>

      {!loading &&
        songs.map((song) => {
          return <h1>{song.title}</h1>;
        })}

      <Button
        fullWidth
        variant="text"
        color="secondary"
        onClick={() => history.push("/song")}
      >
        Add Songs
      </Button>

      <Button onClick={handleLogOut}>Log Out</Button>
    </>
  );
};
