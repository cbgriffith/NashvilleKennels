import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useNavigate } from "react-router"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)
  const navigate = useNavigate()

  //useEffect - reach out to the world for something
  useEffect(() => {
    // console.log("AnimalList: useEffect - getAnimals")
    getLocations()
    .then(getCustomers)
    .then(getAnimals)
// eslint-disable-next-line
  }, [])


  return (
    <>
      <h2>Animals</h2>
        <button onClick={() => {navigate("create")}}>
       Add Animal 
        </button>
    <div className="animals">
      {/* {console.log("AnimalList: Render", animals)} */}
      {
        animals.map(animalObj => {
          const owner = customers.find(c => c.id === animalObj.customerId)
          const clinic = locations.find(l => l.id === animalObj.locationId)

          return <AnimalCard key={animalObj.id} 
                    location={clinic}
                    customer={owner}
                    animal={animalObj} />
        })
      }
    </div>
    </>
  )
}
