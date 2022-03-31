import { Formik,Form } from 'formik';
import React, { useState } from 'react';
import * as Yup from "yup";
import { Grid, Box } from "@mui/material";
import Control from "../../controls/Control";
import CourseService from '../../service/CourseService';

export default function CourseForm() {

  //const [loading, setLoading]=useState();


  const initValues = {
    name:"",
    description:""
  }

  const [formValues, setFormValues] = useState(initValues);

  const validationSchema = Yup.object({
    name:Yup.string().required("Required"),
    description:Yup.string().required("Required"),
  });

  const handelSubmit = async (values) =>{
    if(validationSchema){
      console.log("Application", values)
      CourseService.create(values).then((response)=>{
        console.log("crete");
      });
    }
  };

  //const onSubmit = (values) => console.log("Application", values);

  return (

    <>
    <Formik
    initialValues={formValues}
    validationSchema={validationSchema}
    onSubmit={async(values,onSubmitPros)=>{
      await handelSubmit(values);
      onSubmitPros.resetForm();
    }}

    >
      {()=>(
        <Form>
         <Box sx={{ flexGrow: 1 }} spacing={2}>
         <Grid container spacing={2}>
           <Grid item xs={6}>
             <Control.Input name="name" label="Course Name" />
           </Grid>
           <Grid item xs={6}>
             <Control.Input name="description" label="Description" />
                  </Grid>
           </Grid>
           <Grid item xs={4}>
                    <Control.Button type="submit" text="Submit" color="success"/>
                    <Control.Button type="reset" text="Reset" />
                  </Grid>
           </Box>
           </Form>
      )}

    </Formik>

    </>


  );
}
