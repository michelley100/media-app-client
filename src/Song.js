import { Button, Input } from "@material-ui/core";
import { PostAdd } from "@material-ui/icons";
import Axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import FormikControl from "./Components/Formik/FormikControl";
import * as Yup from "yup";

export const Song = ({ history }) => {
  const initialSongs = {
    title: "",
  };
  const validateSong = Yup.object({
    title: Yup.string().required("Requires song title"),
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
            <FormikControl control="input" name="title" label="songs" />
            <Button fullWidth variant="text" color="primary" type="submit">
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
