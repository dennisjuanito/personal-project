import React from "react";
import TextField from "@material-ui/core/TextField";

const renderTextArea = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  
  <TextField
  multiline
  rowsMax="4"
  rows="2"
    {...input}
    {...custom}
  />
 
);

// errorText={touched && error}
// hintText={label}
// floatingLabelText={label}

export default renderTextArea;


 