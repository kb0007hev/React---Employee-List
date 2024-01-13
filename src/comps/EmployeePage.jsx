import React from 'react';
import {Link, useParams} from "react-router-dom"
import "../index.css"
import data from "../data"

function EmployeePage(props) {
const {name} = useParams()

console.log(data)

  const employee = data.find((item) => {
      return  item.name === name
    
       
    })
    console.log(employee)
   return (
    <div className="employeePage" >
      {employee ? (
            <div>
                <h2>{employee.name}</h2>
                <h2>{employee.title}</h2>
                <h2>{employee.phone}</h2>
                <h2>{employee.email}</h2>
                <img src={employee.headshot} alt="Employee Headshot" />
            </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default EmployeePage;


