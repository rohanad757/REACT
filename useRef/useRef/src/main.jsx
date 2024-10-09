import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App1 from './App1.jsx'
import './index.css'
import StopWatch from './StopWatch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* < App1 /> */}
    < StopWatch />
  </StrictMode>,
)
