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
export const SignIn = ({ history }) => {
  const classes = useStyles();

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("email is required"),
    password: Yup.string().required("password is required"),
  });
  const onSubmit = async (values) => {
    const options = {
      method: "POST",
      headers: {},
      data: values,
      url: "https://localhost:8090/signin",
    };
    try {
      const { data } = await Axios(options);
      // console.log(data.token);
      localStorage.setItem("token", data.token);
      history.push("/home");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.background}
    >
      <Grid item lg={3} md={4} sm={7} xs={9}>
        <Paper elevation={13}>
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
                      <div className={classes.grow}>
                        <Typography variant="h3">Sign In</Typography>
                        <Field
                          component={TextField}
                          name="email"
                          label="G-mail"
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
                          className={classes.space}
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="secondary"
                          disabled={!props.isValid || props.isSubmitting} //props of formik
                        >
                          Sign In
                        </Button>
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          onClick={() => history.push("/unauth/signup")}
                        >
                          Not Sign up Yet Go to Sign Up
                        </Button>
                      </div>
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
