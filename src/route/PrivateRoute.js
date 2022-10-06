// import React, { useState } from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// // import LoginInput from '../auth/loginInput';


// const PrivateRoute = () => {
//     const [isLogin,setIsLogin]=useState('')
//     return (

      
//             isLogin ?<Outlet/>: <Navigate to="/" />
        
//     );
// };

// export default PrivateRoute;

import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
const PrivateRoute=()=>{
//  let isLoggedIn;
const isLoggedd=()=>{

    if(!JSON.parse(localStorage.getItem('auth_token'))){
       return(true);   
    }else{
       return(false);
      
    }
    
}
 const [isLogged, setIsLogged] = useState(isLoggedd)

    
    return  setIsLogged? <Outlet/>:<Navigate to='/' /> ;
}
export default PrivateRoute;