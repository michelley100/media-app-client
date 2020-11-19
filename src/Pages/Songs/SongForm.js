import { Box, Button, Dialog, Input, Typography } from "@material-ui/core";
import Axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";

export const SongForm = ({
  history,
  id,
  isEdit = false,
  onClose,
  refresh,
  ...rest
}) => {
  const [oldSong, setoldSong] = useState(null);
  const [song, setSong] = useState(false);
  const [message, setMessage] = useState(false);

  const initialSongs = {
    title: "",
    artist: "",
    genre: "",
    comment: "",
  };
  const validateSong = Yup.object({
    title: Yup.string().required("Requires song title"),
    artist: Yup.string().required("Requires song title"),
    genre: Yup.string().required("Requires song title"),
    comment: Yup.string().required("Requires song title"),
  });

  const onSubmit = async (values) => {
    const token = localStorage.getItem("token");
    const options = {
      method: isEdit ? "PUT" : "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: values,
      url: isEdit
        ? `https://localhost:8090/song/${id}`
        : "https://localhost:8090/song",
    };
    try {
      const data = await Axios(options);

      console.log(data);
      onClose();
      refresh();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setSong(true);
    const getSongs = async (values) => {
      const token = localStorage.getItem("token");
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: values,
        url: `https://localhost:8090/song/${id}`,
      };
      try {
        const { data } = await Axios(options);
        setoldSong(data);
      } catch (e) {
        console.log(e);
      }
    };
    if (isEdit) {
      getSongs();
    }
  }, []);

  return (
    <Formik
      initialValues={oldSong || initialSongs}
      validationSchema={validateSong}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(props) => {
        return (
          <Form>
            <Box mb={3}>
              {message ? (
                <Typography variant="h5" color="error">
                  {message}
                </Typography>
              ) : (
                <Typography variant="h5">
                  {isEdit ? "Update Song" : "Add Song"}
                </Typography>
              )}
            </Box>
            <Field
              component={TextField}
              name="title"
              label="songs"
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
              {isEdit ? "UPDATE SONG" : "ADD SONG"}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
