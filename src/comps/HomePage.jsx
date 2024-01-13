import React from "react";
import styles from "../styles/HomePage.module.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList"
import EmployeePage from "./EmployeePage"


function HomePage() {
  return (
  <div className={styles.wholeContainer}>

        <div className={styles.leftBox}>
              <Header className="styles.smallBox" />
              <SearchBar className="styles.employeeList" />
              <EmployeeList className="styles.box" /> 
              <EmployeePage /> 
            
      </div>
  </div>
  );
}

export default HomePage;