import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextInput from "../../common/textinput/TextInput";
import Card from "@material-ui/core/Card";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function displayError(error) {
  return <text> {error} </text>;
}
export default function TestRunning({ history }) {
  const classes = useStyles();
  const [email, setEmail] = useState("deded");
  const [emailValidate, setEmailValidate] = useState(true);
  const [password, setPassword] = useState(true);
  const [passwordValidate, setPasswordValidate] = useState(true);
  const [error, setError] = useState(true);

  function _validate(text, type) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    switch (type) {
      case "email":
        setEmail(text);
        if (regex.test(text)) {
          setEmailValidate(false);
        } else {
          setEmailValidate(true);
        }
        break;
      case "password":
        setPassword(text);
        if (text.length >= 8) {
          setPasswordValidate(false);
        } else {
          setPasswordValidate(true);
        }
        break;
      default:
        null;
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form}>
          <div>
            <div class="panel-body">
              The POST tests would be run using the meta data of the chosen SOR.
              If Other is chosen, only the GET tests would be executed
            </div>
          </div>

          <h2>Endpoint</h2>
          <div class="panel panel-default">
            <TextInput
              name="endpoint"
              type="text"
              class="form-control"
              label="SOR endpoint"
            />
          </div>
          <div class="container">
            <h2>Valid AOID OOID couple</h2>
            <div class="panel panel-default">
              <div class="panel-body">
                A valid couple of OOID AOID to be used in the header
              </div>
              <TextInput
                name="validOOID"
                type="text"
                class="form-control"
                label="OOID"
              />
              <TextInput
                name="validAOID"
                type="text"
                class="form-control"
                label="AOID"
              />
            </div>
          </div>
          <div class="container">
            <h2>Invalid AOID OOID couple</h2>
            <div class="panel panel-default">
              <div class="panel-body">
                A couple of OOID AOID that exist but does not work together to
                be used in the header
              </div>
              <TextInput
                name="invalidCoupleOOID"
                type="text"
                class="form-control"
                label="OOID"
              />
              <TextInput
                name="invalidCoupleAOID"
                type="text"
                class="form-control"
                label="AOID"
              />
            </div>
          </div>
          <div class="container">
            <h2>OOID that does not fit the AOID in the URI</h2>
            <div class="panel panel-default">
              <div class="panel-body">
                A valid couple of OOID AOID to be used in the header and an AOID
                from another partner to be used in the URI
              </div>
              <div className={classes.textinput}>
                <TextInput
                  id="OOUID"
                  label="OOUID"
                  name="validOOID2"
                  type="text"
                  class="form-control"
                  placeholder="OOID"
                />
              </div>
              <div className={classes.textinput}>
                <TextInput
                  name="validAOID2"
                  type="text"
                  class="form-control"
                  label="AOID in the header"
                />
              </div>
              <TextInput
                name="uriAOID"
                type="text"
                class="form-control"
                label="AOID in the URI"
              />
            </div>
          </div>
          <div class="container">
            <h2>Email recipients</h2>
            <div class="panel panel-default">
              <div class="panel-body">
                The test report would be sent to the provided list of recipients
                in this field
              </div>
              <TextInput
                name="recipients"
                type="text"
                class="form-control"
                label="Recipients"
              />
            </div>
          </div>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 30
  },
  text: {
    fontWeight: "bold"
  },
  textinput: {
    marginTop: 30
  }
}));
