import React from 'react'
import { Routes,Route } from 'react-router-dom'
import PrivateRoute from '../route/PrivateRoute'
import HomeScreen from '../screen/HomeScreen'


import LoginScreen from '../screen/LoginScreen'
const Routers = () => {
  return (
   <Routes>
  <Route  element={<PrivateRoute/>} > 
    <Route path='/' element={<LoginScreen/>}/>
       </Route>
  <Route path='/home' element={<HomeScreen/>} />
   
      

    
   </Routes>
  )
}

export default Routers
