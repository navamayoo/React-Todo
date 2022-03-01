import React, { useState, useEffect } from "react";
import PageHeader from "../../layout/PageHeader";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import StudentForm from "./StudentForm";
import {
  Container,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import StudentService from "../../service/StudentService";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiTableCell-head": {
      color: "black",
      backgroundColor: "#2a9c3b",
    },
  },
});

export default function Student() {
  const classes = useStyles();
  const [records, setRecords] = useState({});

  const getStudents = async () => {
    await StudentService.getAll()
      .then((response) => {
        setRecords(response.students);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getStudents();
  },[]);
  // const getStudent = async () => {
  //   await StudentService.getAll()
  //     .then((response) => {
  //       setRecords(response.students);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
    <>
      <PageHeader
        title="Add New Student"
        //  subTitle="Create a Student Profile"
        icon={<PersonAddAlt1Icon fontSize="large" />}
      />
       {/* <Paper elevation={0} variant="outlined" mt={10} style={{padding: 10,backgroundColor: "#e1f5fe",}}> */}
       <Paper elevation={0} variant="outlined"  style={{padding: 10}}>
       <Container maxWidth="lg">
        <StudentForm />
      </Container>

       </Paper>


     <Paper elevation={0} variant="outlined"  style={{ margin: "16px 0px", padding: 10 }}>
              <TableContainer container={Paper}>
        <Table border="1">
          <TableHead >
            <TableRow  className={classes.root}>
            <TableCell>Code</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Second Name</TableCell>
              <TableCell>E-mail</TableCell>
              <TableCell>Date Of Birth</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Action Button</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.length > 0 
            ? records.map((record)=>(
              <TableRow  key={record.code}>
              <TableCell>{record.code}</TableCell>
              <TableCell>{record.firstName}</TableCell>
              <TableCell>{record.secondName}</TableCell>
              <TableCell>{record.email}</TableCell>
              <TableCell>{record.dob}</TableCell>
              <TableCell>{record.gender}</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
            )): "Loading"}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>

    </>
  );
}
