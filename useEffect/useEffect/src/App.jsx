import { useState } from 'react'
import Counter from './assets/Components/Counter'
import './App.css'

function App() {
  const [state, setState] = useState(true)
  let toggle = (e) => {
    // if (state === true) {
    //   setState(false);
    // }
    // else{
    //   setState(true);
    // }
    setState(!state)
  }
  return (
    <>
    <button onClick={toggle}>Toggle</button>
    {state ? <Counter/> : ""}
    </>
  )
}
export default App
