import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useNavigate } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();
    // eslint-disable-next-line
	const navigate = useNavigate();

  useEffect(() => {
    // console.log("useEffect", locationId)
    getLocationById(locationId)
    .then((response) => {
      setLocation(response)
    })
    // eslint-disable-next-line
    }, [])

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <address className="location__address">{location.address}</address>
      {/* What's up with the question mark???? See below.*/}
      <h4 className="location__employees">Employees</h4>
      <ul className="location__employeesList">
          {location.employees?.map(employee => <li key={employee.id}>{employee.name}</li>)}
      </ul>
      <h4 className="location__animals">Current Residents</h4>
      <ul className="location__animalsList">
          {location.animals?.map(animal => <li key={animal.id}>{animal.name}</li>)}
      </ul>
    </section>
  )
}
