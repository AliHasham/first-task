import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LocalRout from '../route/LocalRout'
import PrivateRoute from '../route/PrivateRoute'
import HomeScreen from '../screen/HomeScreen'


import LoginScreen from '../screen/LoginScreen'
const Routers = () => {
  return (
   <Routes>
     <Route path='/home' element={<HomeScreen/>} />
  
  <Route  element={<PrivateRoute/>} > 
 
       </Route>
    <Route element={<LocalRout/>} >
    <Route path='/' element={<LoginScreen/>}/>
   </Route>
      

    
   </Routes>
  )
}

export default Routers
