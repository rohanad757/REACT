import React, { useEffect, useState } from 'react'
import './Counter.css'
function Counter() {
    const [count , setCount] = useState(0)
    let Update = () => {
        setCount(count + 1);
    }
    let decrement = () => {
        setCount(count-1);
    }
// // Variation 1 : --- >
    // useEffect(()=>{
    //     console.log("Only while Rendering");
    //     alert("Only while Rendering")
    // },[])
// // Variation 2 : --- >
    // useEffect(()=>{
    //     console.log("Only while Updating",count);
    //     alert("only while Updating")
    // },[count])

// // Variation 3 : --- >

    // useEffect(()=>{
    //     alert("No")
    // })

// // Variation 4 : --- >

    // useEffect(()=>{
    //     console.log("Mounter",count);
    //     // alert("Mounted")
    //      return() => {(
    //         console.log("Unmounted",count)
    //         // alert("Umounted")
    //      )}
    // },[count])
    
  return (
    <div className='container'>

    <div className='clas'>Count Value : {count}</div>
    <div className='but'>
        <button onClick={Update} >Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
    
    </div>
  )
}

export default Counter