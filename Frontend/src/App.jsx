import './App.css'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from   "./Pages/Login/Login";
import {Toaster }from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext';
function App() {
  const {authUser}  = useAuthContext()

 
  return (
    <div className='p-4 h-screen flex items-center justify-center border'>
     
     <Routes>
      <Route path='/' element={authUser ? <Home/> : <Navigate to="/login"/>} />
      <Route path='/login' element={authUser ?<Navigate to={'/'}/> : <Login/>}/>
      <Route path='/signup' element={authUser? <Navigate to="/" /> : <Signup/>}/>

 
      
     </Routes>
     <Toaster/>
    </div>
  )
}

export default App

