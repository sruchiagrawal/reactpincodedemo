import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          {/* <Route path="emp_login" element={ <Emp_login/> } />
          <Route path="stu_login" element={ <Stu_login/> } />
          <Route path="stu_registration" element={ <Stu_registration/> } />
          <Route path="emp_registration" element={ <Emp_registration/> } />
          <Route path="new" element={ <New/> } />
          <Route path="contact" element={ <Contact/> } /> */}
        </Routes>
      </Router>
      
    </>
    
  );
}

export default App;
