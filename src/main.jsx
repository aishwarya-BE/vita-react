import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Onclick_datetime from './Task/onclick_datetime.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Onclick_datetime />
  </StrictMode>
)
