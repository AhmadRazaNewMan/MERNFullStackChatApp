import './App.css'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from   "./Pages/Login/Login";
import {Toaster }from 'react-hot-toast'
function App() {
 
  return (
    <div className='p-4 h-screen flex items-center justify-center border'>
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>


      
     </Routes>
     <Toaster/>
    </div>
  )
}

export default App

