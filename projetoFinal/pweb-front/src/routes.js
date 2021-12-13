import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import TaskList from "./pages/TaskList"
import VehicleForm from "./pages/VehicleForm"
import Login from "./pages/Login"
import ChecklistForm from "./pages/ChecklistForm"
import EmployeeRegistrationForm from "./pages/EmployeeRegistrationForm"
import ReservationForm from "./pages/ReservationForm"
import ProviderRegistrationForm from "./pages/ProviderRegistrationForm"
import CarList from "./pages/CarList"



export default function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/task-list" element={<TaskList/>} />
                <Route exact path="/vehicle-create" element={<VehicleForm/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/checklist" element={<ChecklistForm/>} />
                <Route exact path="/employeeregister" element={<EmployeeRegistrationForm/>} />                
                <Route exact path="/provider-register" element={<ProviderRegistrationForm/>} />                
                <Route exact path="/reservation" element={<ReservationForm/>} />
                <Route exact path="/carlist" element={<CarList/>} />                
                
            </Routes>
            
        </BrowserRouter>
    )

}