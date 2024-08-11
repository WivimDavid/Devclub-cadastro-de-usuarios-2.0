import React from 'react'
import ReactDOM from 'react-dom/client'
import { Globalstyles } from './styles/Globalstyles'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Globalstyles /> 
    <RouterProvider router={router}/> 
  </React.StrictMode>
)
