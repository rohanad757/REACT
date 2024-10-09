import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    let navigate = useNavigate();
    function clickHandle() {
        navigate('/dash')
    }
    return (
        <div>
            About
            <br />
            <button onClick={clickHandle} >Move to Dashboard</button>
        </div>
    )
}
export default About