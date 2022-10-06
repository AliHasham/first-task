
import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
const PrivateRoute=()=>{
const isLoggedd=()=>{
    if(!JSON.parse(localStorage.getItem('user_login'))){
       return(false);   
    }else{
       return(true);
      
    }
    
}
 const [isLogged, setIsLogged] = useState(isLoggedd)

    
    return isLogged? <Outlet/>:<Navigate to='/home' /> ;
}
export default PrivateRoute;