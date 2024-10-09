import React from 'react'
import { Link, NavLink ,useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    let navigate = useNavigate();
    function handleClick() {
        navigate('/home')
    }
    return (
        <div>
            <ul>
                <li><NavLink to="/home" className={({ isActive }) => isActive ? "active-link" : ""} >Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""} >About</NavLink></li>
                <li><NavLink to="/dash" className={({ isActive }) => isActive ? "active-link" : ""} >Dashboard</NavLink></li>
                <li><NavLink to="/student/{id}" className={({ isActive }) => isActive ? "active-link" : ""} >Student</NavLink></li>
            </ul>
            <button onClick={handleClick} >Move to Home Page</button>
        </div>
    )
}

export default Navbar