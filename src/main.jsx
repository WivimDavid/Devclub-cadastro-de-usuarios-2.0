import React from 'react'
import ReactDOM from 'react-dom/client'
import { Globalstyles } from './styles/Globalstyles'
import { Home } from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Globalstyles /> 
    <Home />
  </React.StrictMode>,
)
