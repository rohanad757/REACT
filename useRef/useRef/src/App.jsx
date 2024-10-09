import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // // let num = 1;
  let num = useRef(0);

  const update = () => {
    // // num = num + 1;
    num.current = num.current + 1;
    console.log("update :", num.current);
    setCount(count + 1);
  }
  const decrement = () => {
    // // num = num - 1;
    num.current = num.current - 1;
    console.log("decrement :", num.current);
    setCount(count - 1);
  }
  return (
    <>
      <button onClick={update}>Update : {count}</button>
      <button onClick={decrement} >Decrement : {count}</button>
      <p>Ref Variable : {num.current}</p>
    </>
  )
}

export default App
