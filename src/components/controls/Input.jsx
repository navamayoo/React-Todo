import React from "react";
import { Field, ErrorMessage } from "formik";
import Error from "./ErrorMessage";
import { TextField } from "@mui/material";

const Input = (props) => {
  const { name, handleChange, value, ...rest } = props;
  return (
    <>
      <Field
        {...rest}
        name={name}
        value={value}
        as={TextField}
        fullWidth
        variant="outlined"
        size="small"
        onChange={handleChange}
      />
      
        <ErrorMessage name={name} component={Error}/>
      
    </>
  );
};
export default Input;
