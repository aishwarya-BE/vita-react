import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

createRoot(document.getElementById('root')).render(
  <div>
    <div className="h1 text-center">Hello,This is Aishwarya!</div>
    <div className="h3 ">Welcome to learn React JS</div>

  </div>
)
