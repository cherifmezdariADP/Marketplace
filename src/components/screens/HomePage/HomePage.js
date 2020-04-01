import React from "react";
import Card from "../../common/Card/Card";
import Grid from "@material-ui/core/Grid";
import app from "../../../FireBase";

import { makeStyles } from "@material-ui/core/styles";

export default function HomePage({ history }) {
  const classes = useStyles();

  return (
    <div>
      <button title="logout" onClick={() => app.auth().signOut()}>
        
        logout
      </button>
      <Grid container spacing={2} justify="center">
        <div className={classes.card}>
          <Card name="ADP link" description="description" history={history} />
        </div>
        <div className={classes.card}>
          <Card name="Decidium" description="description" />
        </div>
        <div className={classes.card}>
          <Card name="Other" description="description" />
        </div>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    flexDirection: "row",
    justifyContent: " center",
    alignItems: "center",
    flexWrap: "wrap"
  },
  card: {
    margin: 20,
    width: 400
  }
});
