import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Onclick_datetime from './Task 1/onclick_datetime.jsx'
import Simple_form from './Task 2/Simple_form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Simple_form />
  </StrictMode>
)
