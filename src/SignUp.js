import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import FormikControl from "./Components/Formik/FormikControl";
import * as Yup from "yup";
import Axios from "axios";

const style = makeStyles({
  space: {
    marginTop: "100px",
  },
});

//take only history props from Switch
export const SignUp = ({ history }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("email is required"),
    password: Yup.string().required("password is required"),
  });
  const onSubmit = async (values) => {
    const options = {
      method: "POST",
      headers: {},
      data: values,
      url: "https://localhost:8090/signup",
    };
    try {
      const { data } = await Axios(options);
      console.log(data.token);
      localStorage.setItem("token", data.token);
      history.push("/home");
    } catch (e) {
      console.error(e);
    }
  };

  const classes = style();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => {
        return (
          <Form>
            <div className={classes.form}>
              <Typography variant="h3">Sign Up</Typography>
              <FormikControl
                control="input"
                name="firstName"
                label="FirstName"
              />
              <FormikControl control="input" name="lastName" label="LastName" />
              <FormikControl control="input" name="email" label="E-mail" />
              <FormikControl
                control="input"
                name="password"
                label="Password"
                type="password"
              />

              <Button
                className={classes.space}
                type="submit"
                fullWidth
                variant="outlined"
                color="secondary"
                disabled={!props.isValid || props.isSubmitting}
              >
                Sign Up
              </Button>

              <Button
                fullWidth
                variant="text"
                color="primary"
                onClick={() => history.push("/signin")}
              >
                Alredy a user go to Sign In
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
