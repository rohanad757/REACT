import { useState } from 'react'
import Card from './Components/Card'
import './App.css'

function App() {            // // Parent
  const [name , setName] = useState('')
  return (
    <>
    <Card name={name} setName={setName} />
    <p>This is how Parent send data to child : {name}</p>
    </>
  )
}
export default App
