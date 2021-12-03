import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeForm } from "./employee/EmployeeForm"

export const ApplicationViews = () => {
    return (
        <LocationProvider>
            <AnimalProvider>
                <CustomerProvider>
                    <EmployeeProvider>

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="locations/*" element={<LocationList />} />
                            <Route path="animals/*" element={<AnimalList />} />
                            <Route path="animals/create/*" element={<AnimalForm />} />
                            <Route path="customers/*" element={<CustomerList />} />
                            <Route path="employees/*" element={<EmployeeList />} />
                            <Route path="employees/create/*" element={<EmployeeForm />} />
                        </Routes>

                    </EmployeeProvider>
                </CustomerProvider>
            </AnimalProvider>
        </LocationProvider>
    )}