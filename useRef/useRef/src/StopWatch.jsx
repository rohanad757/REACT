import React, { useRef, useState } from 'react'
import './App.css'
function StopWatch() {
    const [time, setTime] = useState(0);
    const timeRef = useRef(null);
    let startTimer = () => {
        timeRef.current = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000);
    }
    let stopTimer = () => {
        clearInterval(timeRef.current);
        timeRef.current = null;
    }
    let reserTimer = () => {
        stopTimer();
        setTime(0);
    }
    return (
        <div>
            <h1 ref={timeRef} >Stop Watch : {time}</h1>
            <button onClick={startTimer} >Start</button>
            <button onClick={stopTimer} >Stop</button>
            <button onClick={reserTimer} >Restart</button>
        </div>
    )
}
export default StopWatch