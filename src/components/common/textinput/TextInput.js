import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import React from "react";
export default function TextInput({ id, label, name, onChange, type }) {
  return (
    <Grid item xs={30} sm={30}>
      <TextField
        variant="outlined"
        required
        fullWidth
        id={id}
        label={label}
        name={name}
        autoComplete="lname"
        onChange={onChange}
        type={type}
      />
    </Grid>
  );
}
