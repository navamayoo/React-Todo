import React from "react";
//Icons
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
//import MenuBookIcon from "@mui/icons-material/MenuBook";

//Components
import Student from "../pages/student/Student";
import Course from "../pages/courses/courses";
//import CourseStudent from "../../pages/Admin/CourseStudents/CourseStudent";

export const routes = [
  {
    path: "/",
    component: <Student />,
    label: "Student",
    icon: <PeopleAltIcon />,
  },
  {
    path: "/course",
    component: <Course/>,
    label: "Course",
    icon: <LibraryBooksIcon />,
  },
//   {
//     path: "/course-student",
//     component: <CourseStudent />,
//     label: "Course-Student",
//     icon: <MenuBookIcon />,
//   },
];