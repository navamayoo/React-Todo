
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import XDrawer from '../components/layout/XDrawer'
import Student from '../components/pages/student/Student';

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
