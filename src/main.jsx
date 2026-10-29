import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Movie from './Ternary_Operator/App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Movie />
  </StrictMode>
)
