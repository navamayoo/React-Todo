import React from "react";
import { Formik, Form } from "formik";
import Control from "../../controls/Control";
import * as Yup from "yup";
import { Grid } from "@mui/material";

export default function StudentForm() {
  initialValues = {};
  validationSchema = Yup.object({});
  const onSubmit = (values) => console.log("Form date", values);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => <Form></Form>}
      </Formik>
    </>
  );
}
