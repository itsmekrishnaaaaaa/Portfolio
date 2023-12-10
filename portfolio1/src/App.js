import React from 'react';
import "./index.css";
import Home from './Routes/Home';
import Project from "./Routes/Project";
import About from './Routes/About';
import Contact from './Routes/contact';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {
  return (
 <>
 <Router>
  <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="Project" element={<Project/>}/>
  <Route path="About" element={<About/>}/>
  <Route path="Contact" element={<Contact/>}/>
  </Routes>
 </Router>
 </>
  );
}


export default App;
