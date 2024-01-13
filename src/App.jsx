import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./comps/HomePage";
import EmployeePage from "./comps/EmployeePage"
import Header from "./comps/Header"; 

// import styles from "./styles/App.module.css"

function App() {

  return (

  
    <BrowserRouter>
          <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/:name" element={<EmployeePage/>} />
          </Routes>
    </BrowserRouter>

  );
}

export default App;