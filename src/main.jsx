import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Counter from '../src/UseEffect/Counter.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import APICounter from './UseEffect/APICounter.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <StrictMode>
      <APICounter/>
    </StrictMode>
  </div>
)
