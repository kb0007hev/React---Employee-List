import React from 'react';
import {Link,useParams} from "react-router-dom"
import styles from "../styles/EmployeePage.module.css"
import data from "../data"

function EmployeePage(props) {
const {name}= useParams()
console.log(data)
  const employee=  data.find((item) => {
        if(item.name === name){
            return true
        }
    })
    console.log(employee)
    return (
        <div className={styles.container}> 
    
                <div> 
                    <h2>{employee.name}</h2>
                    <h2>{employee.title}</h2>
                    <h2>{employee.phone}</h2>
                    <h2>{employee.email}</h2>
                    <p>{employee.position}</p>
                    
                </div> 
    
             </div>
        
    )
};

export default EmployeePage; 


