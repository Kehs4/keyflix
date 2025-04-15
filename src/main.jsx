import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Principal from './principal/principal'
//import App from './dashboard/dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Principal />
  </StrictMode>,
)
