import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams, useNavigate } from "react-router-dom"

export const EmployeeDetail = () => {
  const { getEmployeeById } = useContext(EmployeeContext)

	const [employee, setEmployee] = useState({})

	const {employeeId} = useParams();
    // eslint-disable-next-line
	const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
    .then((response) => {
      setEmployee(response)
    })
    // eslint-disable-next-line
    }, [])

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      {/* What's up with the question mark???? See below.*/}
      <div className="employee__location">Location: {employee.location?.name}</div>
    </section>
  )
}
