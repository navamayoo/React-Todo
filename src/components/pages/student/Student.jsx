import React, { useState, useEffect } from "react";
import PageHeader from "../../layout/PageHeader";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddIcon from "@mui/icons-material/Add";
import StudentForm from "./StudentForm";
import Popup from "../../controls/Dialog/Popup";
import Control from "../../controls/Control";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Toolbar,
} from "@mui/material";
import StudentService from "../../service/StudentService";
import { makeStyles } from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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
  const [openPopup, setOpenPopup] = useState(false);
  const [FormSubmitted,setFormSubmitted] =useState(0);
  const [data, setData]=useState({});



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
  },[FormSubmitted]);

  const getStudentByCode = async (code) => {
    await StudentService.getByCode(code)
      .then((response) => {
        setData(response.student);
        console.log("from data",response.student)
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <PageHeader
        title="Add New Student"
        icon={<PersonAddAlt1Icon fontSize="large" />}
      />
       {/* <Paper elevation={0} variant="outlined" mt={10} style={{padding: 10,backgroundColor: "#e1f5fe",}}> */}
       {/* <Paper elevation={0} variant="outlined"  style={{padding: 10}}>
       <Container maxWidth="lg">
        <StudentForm />
      </Container>

       </Paper> */}



     <Paper elevation={0} variant="outlined"  style={{ margin: "16px 0px", padding: 10 }}>
     <Toolbar>
        
          <Control.Button
            
            text="Add New"
            variant="outlined"
            onClick={() => {
              
              setOpenPopup(true);
            }}
            startIcon={<AddIcon />}
          />
        </Toolbar>
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
              <TableCell>Action</TableCell>
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
             <TableCell>
                        <Control.ActionButton
                          size="small"
                          color="primary"
                          onClick={() => {
                            getStudentByCode(record.code);
                            setOpenPopup(true);
                          }}
                        >
                          <EditIcon fontSize="small" />
                        </Control.ActionButton>
                        <Control.ActionButton size="small" color="error">
                          <DeleteIcon fontSize="small" />
                        </Control.ActionButton>
                      </TableCell>
            </TableRow>
            )): "Loading"}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
      <Popup
        title="Student Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
       
        <StudentForm data={data} setFormSubmitted={setFormSubmitted} />

      </Popup>
    </>
  );
}
