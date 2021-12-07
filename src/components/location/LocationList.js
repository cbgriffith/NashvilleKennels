import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    // console.log("LocationList: useEffect - getLocations")
    getLocations()
// eslint-disable-next-line
  }, [])


  return (
    <>
    <h1>Locations</h1>
    <div className="locations">
      {/* {console.log("LocationList: Render", locations)} */}
      {
        locations.map(location => {
          let employees = location.employees.filter(e => e.locationId === location.id)
          let totalEmployees = employees.length
          let oneEmployee = (totalEmployees === 1) ? "employee" : "employees";
          let animals = location.animals.filter(a => a.locationId === location.id)
          let totalAnimals = animals.length
          let oneAnimal = (totalAnimals === 1) ? "animal" : "animals";
          return <LocationCard
           key={location.id} 
           location={location}
           totalEmployees={totalEmployees}
           oneEmployee={oneEmployee}
           totalAnimals={totalAnimals}
           oneAnimal={oneAnimal}
           />
        })
      }
    </div>
    </>
  )
}
