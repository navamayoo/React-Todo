import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import Control from "../../controls/Control";
import * as Yup from "yup";
import { Grid, Box } from "@mui/material";
import StudentService from "../../service/StudentService";

const genderItems = [
  { key: "Male", value: "male" },
  { key: "Female", value: "female" },
  { key: "Other", value: "other" },
];

export default function StudentForm({data,setFormSubmitted}) {
  const initialValues = {
    firstName: "",
    secondName: "",
    address1: "",
    address2: "",
    email: "",
    dob: "",
    gender: "",
    phoneNumber: "",
  };
  const [values, setValues] = useState(initialValues);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    secondName: Yup.string().required("Required"),
    address1: Yup.string().required("Required"),
    address2: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Format").required("Required!"),
    dob: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    phoneNumber: Yup.number()
      .min(9, "Must be more than 10 characters")
      .required("Required"),
  });

  const handelSubmit = async (values) => {
   if(validationSchema){
      if(data.code){
        await StudentService.update(data.code,values).then((response) => {
          console.log("update");

        });
      }else{
        await StudentService.create(values).then((response) => {
          console.log("crete");
        });
      }
   }
   setFormSubmitted((prev) => prev + 1);
  };

  useEffect(() => {
    if (data != null) {
      setValues(data);
     // console.log("form Load", data);
    }
  }, [data]);

  const today = new Date().toISOString().split("T")[0];
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, onSubmitProps) => {
          await handelSubmit(values);
          onSubmitProps.resetForm();
        }}
      >
        {(formik) => (
          <Form>
            <Box sx={{ flexGrow: 1 }} spacing={2}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Control.Input name="firstName" label="First Name" value={values.firstName}/>
                </Grid>
                <Grid item xs={6}>
                  <Control.Input name="secondName" label="Second Name" value={values.secondName}/>
                </Grid>
                <Grid item xs={12}>
                  <Control.Input name="address1" label="Address Line 1" value={values.address1}/>
                </Grid>
                <Grid item xs={12}>
                  <Control.Input name="address2" label="Address Line 2" value={values.address2} />
                </Grid>
               
                <Grid item xs={6}>
                  <Control.RadioButton
                    name="gender"
                    label="Gender"
                    options={genderItems}
                    size="small"
                    value={values.gender}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Control.Input
                    type="date"
                    label="Date Of Birth"
                    name="dob"
                    value={values.dob}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      max: today,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Control.Input name="email" label="Email" value={values.email}/>
                </Grid>
                <Grid item xs={6}>
                  <Control.Input name="phoneNumber" label="Phone Number" value={values.phoneNumber}/>
                </Grid>
                <Grid item xs={4}>
                  <Control.Button type="submit" text="Submit" />
                </Grid>
              </Grid>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}
