import React, { useRef } from 'react'

function App1() {
    let btnRef = useRef();
    let backChange = () => {
        btnRef.current.style.backgroundColor = "red";
    }
  return (
    <>
    {/* use ref to link btn ref with button or whatever */}
    <p></p>
    <button ref={btnRef} >Changing happens here</button>      
    <button onClick={backChange} >Change</button>  
    </>
  )
}
export default App1