import React from 'react';
import TexImage from '../auth/texImage';
import LoginInput from '../auth/loginInput';
// import { Dots } from "react-activity";


//  useEffect(()=>{
//   <Dots/>
// }, [])


const LoginScreen = () => {
  return (
    <div className='login-page d-flex pt-5 '>

      <TexImage/>
      <LoginInput/>
      
    </div>
  )
}

export default LoginScreen
