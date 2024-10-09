import { useRef, useState } from 'react'
import './App.css'

function App() {
  let [name, setName] = useState("")
  let refElement = useRef("");
  function reset() {
    setName("");
    refElement.current.focus()
  }
  console.log(refElement);
  return (
    <>
      <h1>Hello Everyone</h1>
      <input ref={refElement} type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
      <button onClick={reset} >Reset</button>
    </>
  )
}
export default App
