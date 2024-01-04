import React, {useState} from "react"
import styles from "../styles/EmployeeListItem.module.css"
import data from "../data"
import EmployeeListItem from "./EmployeeListItem";




function EmployeeList(){
const [employeeData, setEmployeeData] = useState(data);
return (

    <div className={styles.employeeList}>
      {employeeData.map((employee, index) => (
        <div className={styles.employeeSection}>
        <EmployeeListItem key={index + 1} employee={employee} />
        </div>
      ))}
    </div>

  );
}

export default EmployeeList; 


