import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams, useNavigate } from "react-router-dom"

export const AnimalDetail = () => {
  // Update this line of code to include releaseAnimal
const { getAnimalById, releaseAnimal } = useContext(AnimalContext)


	const [animal, setAnimal] = useState({})

	const {animalId} = useParams();
	const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect", animalId)
    getAnimalById(animalId)
    .then((response) => {
      setAnimal(response)
    })
    // eslint-disable-next-line
    }, [])



const handleRelease = () => {
    releaseAnimal(animal.id)
      .then(() => {
        navigate("/animals")
      })
  }



  return (
    <section className="animal">
      <h3 className="animal__name">{animal.name}</h3>
      <div className="animal__breed">{animal.breed}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
      <button onClick={handleRelease}>Release Animal</button>
      <button onClick={() => {
        navigate(`/animals/edit/${animal.id}`)
        }}>Edit</button>

    </section>
  )
}
