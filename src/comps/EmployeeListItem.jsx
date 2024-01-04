import React from "react"; 
import styles from "../styles/EmployeeListItem.module.css"




function EmployeeListItem(props) {
  return (
    <div >

      <div className={styles.employeeListItems}>
        <img className={styles.img} src={props.employee.headshot} />
        <div className={styles.name}> {props.employee.name}</div>
        <div className={styles.title}> {props.employee.title}</div>
       </div>
    </div>
  );
}

export default EmployeeListItem; 