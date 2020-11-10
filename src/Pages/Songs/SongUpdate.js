import { Button } from "@material-ui/core";
import Axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";

export const SongUpdate = ({ history, location, match }) => {
  const initialSongs = {
    title: "",
    artist: "",
    genre: "",
    comment: "",
  };
  const [oldSong, setOldSong] = useState(null);
  const [song, setSong] = useState(false);

  useEffect(() => {
    setSong(true);
    const getSongs = async () => {
      const token = localStorage.getItem("token");
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
        url: `https://localhost:8090/song/${match.params.id}`,
      };
      try {
        const { data } = await Axios(options);
        setOldSong(data);
      } catch (e) {
        console.log(e);
      }
    };
    getSongs();
  }, [match.params.id]);

  const validateSongs = Yup.object({
    title: Yup.string().required("Requires song title"),
    artist: Yup.string().required("Requires song title"),
    genre: Yup.string().required("Requires song title"),
    comment: Yup.string().required("Requires song title"),
  });

  const onSubmit = async (values) => {
    const token = localStorage.getItem("token");
    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: values,
      url: `https://localhost:8090/song/${match.params.id}`,
    };
    try {
      const { data } = Axios(options);
      localStorage.setItem("token", data.token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={oldSong || initialSongs}
      validationSchema={validateSongs}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(props) => {
        return (
          <Form>
            <Field
              component={TextField}
              name="title"
              label="title"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Field
              component={TextField}
              name="artist"
              label="artist"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Field
              component={TextField}
              name="genre"
              label="genre"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Field
              component={TextField}
              name="comment"
              label="comment"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Button
              fullWidth
              variant="text"
              color="primary"
              type="submit"
              disabled={!props.isValid || props.isSubmitting}
            >
              Update Song
            </Button>
            <Button
              fullWidth
              variant="text"
              color="primary"
              onClick={() => history.push("/home")}
            >
              Home
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
