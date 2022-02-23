
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import XDrawer from '../components/layout/XDrawer'
import Student from '../components/pages/student/Student';
//, Route, Routes
export default function App() {
  return (
    <>
    <BrowserRouter>
    <XDrawer>
      <Student/>
    </XDrawer>

   
    </BrowserRouter>
    
    </>
  );
}
