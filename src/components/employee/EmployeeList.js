import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"
import { useNavigate } from "react-router"

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)
  const navigate = useNavigate()

  //useEffect - reach out to the world for something
  useEffect(() => {
    getLocations()
    .then(getEmployees)
// eslint-disable-next-line
  }, [])


  return (
    <>
      <h2>Employees</h2>
        <button onClick={() => {navigate("create")}}>
       Add Employee 
        </button>
    <div className="employees">
      {
        employees.map(employee => {
          const clinic = locations.find(l => l.id === employee.locationId)

          return <EmployeeCard key={employee.id} 
                    location={clinic}
                    employee={employee} />
        })
      }
    </div>
    </>
  )
}

