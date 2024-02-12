import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { SocketContextProvider } from './context/SocketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
  <BrowserRouter>
  <AuthContextProvider> 
    <SocketContextProvider>
   <div className='h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100'>
   <App  />
   </div>
    </SocketContextProvider>
  </AuthContextProvider>
 
  </BrowserRouter>
  </React.StrictMode>,
)
