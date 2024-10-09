import { createContext, useState } from 'react'
import './App.css'
import ChildA from './assets/Components/ChildA'

const data1 = createContext();
const data2 = createContext();

function App() {
  const name = "Rohan";
  const gender = "Male";
  return (
    <>
    <data1.Provider value={name}>
      <data2.Provider value={gender}>
        <ChildA/>
      </data2.Provider>
    </data1.Provider>
    </>
  )
}

export default App
export {data1 , data2}