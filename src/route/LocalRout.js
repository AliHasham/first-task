
import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
const LocalRout=()=>{
const isLoggedd=()=>{
    if(!JSON.parse(localStorage.getItem('user'))){
       return(false);   
    }else{
       return(true);
      
    }
    
}
 const [isLogged, setIsLogged] = useState(isLoggedd)

    
    return setIsLogged? <Outlet/>:<Navigate to='/' />;
}
export default LocalRout;