import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Navigator from './navigator/index.js'
import { NavigationJson } from '../data/example.js'
import './index.css'
import './App.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navigator config={NavigationJson} />
    </BrowserRouter>
  </StrictMode>,
)
