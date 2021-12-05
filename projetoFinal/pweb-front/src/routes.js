import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import TaskList from "./pages/TaskList"
import VehicleForm from "./pages/VehicleForm"
import Login from "./pages/Login"

export default function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/task-list" element={<TaskList/>} />
                <Route exact path="/vehicle-create" element={<VehicleForm/>} />
                <Route exact path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )

}