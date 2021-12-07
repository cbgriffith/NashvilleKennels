import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = ({ location, totalEmployees, oneEmployee, totalAnimals, oneAnimal }) => (
    <>
    
    <section className="location">
        <h3 className="location__name">
          <Link to={`/locations/detail/${location.id}`}>
            { location.name }
          </Link>
        </h3>
        <div className="location__totalEmployees">{totalEmployees} {oneEmployee}</div>
        <div className="location__totalResidents">{totalAnimals} {oneAnimal}</div>
    </section>
    </>
)