import React from "react"; 
import styles from "../styles/EmployeeListItem.module.css"
import {Link} from "react-router-dom"



function EmployeeListItem(props) {
  return (
    <div >
                    <Link to={`/${props.employee.name}`}> 

      <div className={styles.employeeListItems}>
        <img className={styles.img} src={props.employee.headshot} />
        <div className={styles.name}> {props.employee.name}</div>
        <div className={styles.title}> {props.employee.title}</div>
       </div>
                    </Link>
    </div>
  );
}

export default EmployeeListItem; 