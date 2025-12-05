import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Navigator from './navigator/index.js'
import { NavigationJson } from '../data/example4.js'
import './index.css'
import './App.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <div className="flex h-screen">
      <div className="w-60 border-r">
      <Navigator config={NavigationJson} />

      </div>
    </div>
    </BrowserRouter>
  </StrictMode>,
)
