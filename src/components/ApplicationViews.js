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
import { AnimalDetail } from "./animal/AnimalDetail"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"
import { AnimalSearch } from "./animal/AnimalSearch"

export const ApplicationViews = () => {
    return (
        <LocationProvider>
            <AnimalProvider>
                <CustomerProvider>
                    <EmployeeProvider>

                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="locations/*" element={<LocationList />} />
                            <Route exact path="/locations/detail/:locationId" element={<LocationDetail />} />
                            <Route path="animals/*" element={<><AnimalSearch /><AnimalList /></>} />
                            <Route path="animals/create/*" element={<AnimalForm />} />
                            <Route path="animals/edit/:animalId/*" element={<AnimalForm />} />
                            <Route exact path="/animals/detail/:animalId" element={<AnimalDetail />} />
                            <Route path="customers/*" element={<CustomerList />} />
                            <Route path="employees/*" element={<EmployeeList />} />
                            <Route path="employees/create/*" element={<EmployeeForm />} />
                            <Route exact path="employees/detail/:employeeId" element={<EmployeeDetail />} />
                        </Routes>

                    </EmployeeProvider>
                </CustomerProvider>
            </AnimalProvider>
        </LocationProvider>
    )}