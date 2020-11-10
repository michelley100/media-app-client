import { Button } from "@material-ui/core";
import Axios from "axios";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import React, { useState } from "react";
import * as Yup from "yup";

//passing {id} is undefine
export const UserUpdate = ({ history, match }) => {
  const initialUser = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validateUser = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const [oldUser, setoldUser] = useState(null);

  const onSubmit = async (values) => {
    const token = localStorage.getItem("token");
    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: values,
      url: `https://localhost:8090/user/${match.params.id}`,
    };

    try {
      const { data } = Axios(options);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialUser}
      validationSchema={validateUser}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(props) => {
        return (
          <Form>
            <Field
              component={TextField}
              name="firstName"
              label="First Name"
              fullWidth
            />
            <Field
              component={TextField}
              name="lastName"
              label="Last Name"
              fullWidth
            />
            <Field
              component={TextField}
              name="email"
              label="E-mail"
              fullWidth
            />
            <Field
              component={TextField}
              name="password"
              label="Password"
              type="password"
              fullWidth
            />
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              type="submit"
              disabled={!props.isValid || props.isSubmitting}
            >
              Update User
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => history.push("/home")}
            >
              HOME
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => history.push("/users/list")}
            >
              User List
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
