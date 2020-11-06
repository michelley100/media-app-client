import { Button, Input } from "@material-ui/core";
import { PostAdd } from "@material-ui/icons";
import Axios from "axios";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";

export const Song = ({ history }) => {
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
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: values,
      url: "https://localhost:8090/song",
    };
    try {
      const data = await Axios(options);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialSongs}
      onSubmit={onSubmit}
      validationSchema={validateSong}
    >
      {(props) => {
        return (
          <Form>
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
              ADD SONGS
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
