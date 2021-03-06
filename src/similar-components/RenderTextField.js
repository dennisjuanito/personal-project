import React from "react";

import TextField from "@material-ui/core/TextField";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
  
    {...input}
    {...custom}
  />
);

// errorText={touched && error}
// hintText={label}
// floatingLabelText={label}

export default renderTextField;
