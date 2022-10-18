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

    if(!JSON.parse(localStorage.getItem('data'))){
       return(false);   
    }else{
       return(true);
      
    }
    
}
 const [isLogged, setIsLogged] = useState(isLoggedd)

    
    return ( setIsLogged? <Navigate to='/' />:<Outlet/> )
}
export default PrivateRoute;