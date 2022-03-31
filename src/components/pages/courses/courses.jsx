import React from "react";
import PageHeader from "../../layout/PageHeader";
import CourseForm from "./courseForm";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiTableCell-head": {
      color: "black",
      backgroundColor: "#2a9c3b",
    },
  },
});

export default function Courses() {
  const classes = useStyles();

  

  return(
    <>
  
  <PageHeader
        title="Add New Course"
        icon={<MenuBookIcon fontSize="large" />}
      />
    <CourseForm/>
    
    <Paper
        elevation={0}
        variant="outlined"
        style={{ margin: "16px 0px", padding: 10 }}
      >
        {/* <Toolbar>
          <Control.Button
            text="Add New"
            variant="outlined"
            onClick={() => {
              setOpenPopup(true);
            }}
            startIcon={<AddIcon />}
          />
        </Toolbar> */}
        <TableContainer container={Paper}>
          <Table border="1">
            <TableHead>
              <TableRow className={classes.root}>
                <TableCell>Code</TableCell>
                <TableCell>Course Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
