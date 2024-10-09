import { useState } from 'react'
import LogginBtn from './assets/Components/LogginBtn'
import LogoutBtn from './assets/Components/LogoutBtn'
import './App.css'

function App() {
  const [isLogginBtn , setLoggin] = useState(true);
  if (isLogginBtn) {
    return(
      <LogoutBtn/>
    )
  }
  else{
    return(
      <LogginBtn/>
    )
  }
}
export default App
