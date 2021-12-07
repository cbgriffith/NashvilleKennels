import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useNavigate } from "react-router"



export const AnimalList = ({ history }) => {
    const { getAnimals, animals } = useContext(AnimalContext)
    const navigate = useNavigate()

    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <h1>Animals</h1>

            <button onClick={() => navigate("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    animals.map(animal => {
                        return <AnimalCard key={animal.id} animal={animal} />
                    })
                }
            </div>
        </>
    )
}

