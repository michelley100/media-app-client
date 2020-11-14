import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import Axios from "axios";
import { TextField } from "formik-material-ui";
import { useStyles } from "./useStyles";

//take only history props from Switch
export const SignUp = ({ history }) => {
  const classes = useStyles();

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

  return (
    <Grid
      container
      className={classes.signUpBackground}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={11} sm={8} md={4}>
        <Paper elevation={12}>
          <Card>
            <CardContent>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(props) => {
                  return (
                    <Form>
                      <Typography variant="h3">Sign Up</Typography>
                      <Field
                        component={TextField}
                        name="firstName"
                        label="First Name"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                      <Field
                        component={TextField}
                        name="lastName"
                        label="LastName"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                      <Field
                        component={TextField}
                        name="email"
                        label="E-mail"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                      <Field
                        component={TextField}
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />

                      <Button
                        className={classes.signUpSpace}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        disabled={!props.isValid || props.isSubmitting}
                      >
                        Sign Up
                      </Button>

                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => history.push("/unauth/signin")}
                      >
                        Already a user go to Sign In
                      </Button>
                    </Form>
                  );
                }}
              </Formik>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
};
