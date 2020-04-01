import React from "react";
import TextInput from "../../common/textinput/TextInput";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function TestRunning() {
  const classes = useStyles;
  return (
    <Container component="main" maxWidth="xl">
      <h2>SOR</h2>
      <div class="panel panel-default">
        <div class="panel-body">
          The POST tests would be run using the meta data of the chosen SOR. If
          Other is chosen, only the GET tests would be executed
        </div>
      </div>

      <div class="container">
        <h2>Endpoint</h2>
        <div class="panel panel-default">
          <TextInput
            name="endpoint"
            type="text"
            class="form-control"
            label="SOR endpoint"
          />
        </div>
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
            A couple of OOID AOID that exist but does not work together to be
            used in the header
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
          <TextInput
            id="OOUID"
            label="OOUID"
            name="validOOID2"
            type="text"
            class="form-control"
            placeholder="OOID"
          />
          <TextInput
            name="validAOID2"
            type="text"
            class="form-control"
            label="AOID in the header"
          />
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
            The test report would be sent to the provided list of recipients in
            this field
          </div>
          <TextInput
            name="recipients"
            type="text"
            class="form-control"
            label="Recipients"
          />
        </div>
      </div>
    </Container>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 500
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
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
    margin: theme.spacing(3, 0, 2)
  }
}));
