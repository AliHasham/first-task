import React, { useState } from 'react'

// import { Spinner } from 'react-activity';
import { Link, useNavigate } from 'react-router-dom'


const LoginInput = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
 

  const navigate = useNavigate();
  // constvalide=()=>{
  //   let email=""
  // if(!this.state.email.include({email})){
  //   email="invalid email"
  // }
  // if(email){
  //   this.setSatate({email});
  //   return false;
  // }
  // return true;}
  const GotoHome = () => {


setLoading(true)
    var axios = require('axios');
    var data = ({
      "username": email,
      "password": password,
      "remoteIp": "string",
      "latitude": "string",
      "longitude": "string",
    });

    var configure = {
      method: 'post',
      url: 'https://apigateway1-qa.azurewebsites.net/gateway/api/User/login',

      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb3JtdWxhcnlfZm9ybXVsYXJ5X3NhdmVfYW5kX3JldHVybl9idXR0b25zIjoiZmFsc2UiLCJmb3JtdWxhcnlfYWRkX256dWxtX21lZGljaW5lIjoiZmFsc2UiLCJ1c2VyX2RlbGV0ZSI6InRydWUiLCJyb2xlX2FkZCI6InRydWUiLCJ1c2VyX3JvbGVfZWRpdCI6InRydWUiLCJmb3JtdWxhcnlfYWRkX25vbl9uenVsbV9tZWRpY2luZSI6ImZhbHNlIiwiZW1haWxfc210cF9hZGQiOiJ0cnVlIiwicmVzdF9wYXNzd29yZF9lZGl0IjoidHJ1ZSIsImFwcF9zZXR0aW5nc19hZGQiOiJ0cnVlIiwicm9sZV9lZGl0IjoidHJ1ZSIsImZvcm11bGFyeV9mb3JtdWxhcnlfc2VhcmNoIjoiZmFsc2UiLCJ1c2VyX2VkaXQiOiJ0cnVlIiwiYWN0aW9uX2xpc3QiOiJ0cnVlIiwicGFnZV9lZGl0IjoidHJ1ZSIsImVtYWlsX3RlbXBsYXRlX2RlbGV0ZSI6InRydWUiLCJkYXNoYm9hcmRfbGlzdCI6InRydWUiLCJlbWFpbF90ZW1wbGF0ZV9lZGl0IjoidHJ1ZSIsInVzZXJfbGlzdCI6InRydWUiLCJ1c2VyX2FkZCI6InRydWUiLCJhY3Rpb25fYWRkIjoidHJ1ZSIsInN5c3RlbV9sb2dzX2xpc3QiOiJ0cnVlIiwic2VuZF9lbWFpbF9saXN0IjoidHJ1ZSIsIm9ubGluZV91c2Vyc19saXN0IjoidHJ1ZSIsImZvcm11bGFyeV9mb3JtdWxhcnlfY2FuY2VsX2J1dHRvbiI6ImZhbHNlIiwicGFnZV9saXN0IjoidHJ1ZSIsInBhZ2VfZGVsZXRlIjoidHJ1ZSIsImFjdGlvbl9lZGl0IjoidHJ1ZSIsImFjdGlvbl9kZWxldGUiOiJ0cnVlIiwicGFnZV9hZGQiOiJ0cnVlIiwicm9sZV9kZWxldGUiOiJ0cnVlIiwiZW1haWxfdGVtcGxhdGVfYWRkIjoidHJ1ZSIsImZvcm11bGFyeV9lZGl0X2Zvcm11bGFyeV9tZWRpY2luZSI6ImZhbHNlIiwiYmFuZGluZ19hZGQiOiJmYWxzZSIsInJvbGVfbGlzdCI6InRydWUiLCJsb2dpbl9hdWRpdF9saXN0IjoidHJ1ZSIsInBhZ2VfYWN0aW9uX2VkaXQiOiJ0cnVlIiwiZW1haWxfc210cF9lZGl0IjoidHJ1ZSIsImFwcF9zZXR0aW5nc19saXN0IjoidHJ1ZSIsImVtYWlsX3RlbXBsYXRlX2xpc3QiOiJ0cnVlIiwiZm9ybXVsYXJ5X3ZpZXdfZm9ybXVsYXJ5X21lZGljaW5lIjoiZmFsc2UiLCJlbWFpbF9zbXRwX2xpc3QiOiJ0cnVlIiwiYXBwX3NldHRpbmdzX2VkaXQiOiJ0cnVlIiwidXNlcl9wZXJtaXNzaW9uX2VkaXQiOiJ0cnVlIiwiZW1haWxfc210cF9kZWxldGUiOiJ0cnVlIiwic3ViIjoiNGIzNTJiMzctMzMyYS00MGM2LWFiMDUtZTM4ZmNmMTA5NzE5IiwiRW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYmYiOjE2NjM5MjY3NjMsImV4cCI6MTY2Mzk2OTk2MywiaXNzIjoiaHR0cHM6Ly9yYXVyYXV0ZXN0aW5nLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiRG9jdW1lbnRVc2VycyJ9.CLDLL6msR13m-NH39ZfXjJb9C6enoFxALN4Yi6-Femw',
        'Content-Type': 'application/json',
      },
      data: data
    };

    axios(configure)

      .then(function (response) {
        localStorage.setItem('user', JSON.stringify(data));
        console.log(JSON.stringify(response.data));
      
        if (!data.getiteam) {

          navigate('/home')
        }
        setLoading(false)

      })
     
     
    //  navigate ("/home");
  }
  // vaildata=()=>{
  //   let email="";
  //   let password="";
  // }

  return (<>
    
    {loading?
    <div class="d-flex justify-content-center loading">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        :null}
    <div className='login p-5' >

      <h6 className='login-header-text d-flex' >Log In</h6>
      <div className='login-input p-5'>
        <div className='lable'>
          <label className='lable mt-5'>Username/Email</label>
        </div>

        <input value={email} onChange={(e) => setEmail(e.target.value)} className='username' size="50" type='email' name='email' placeholder='your username here...' />
       {email===''?<div className='emailVaild'>in correct email</div>:""}

        <div className='lable mt-2'>
          <label>password</label>
        </div>
        <input value={password} onChange={(e) => setPassword(e.target.value)} className='password' size="50" type='password' name='email' placeholder='password...' />
       {password===""?<div className='passwordvaild'> password is correct</div>:""}

      </div>

      <div className="login-form-submit ">
        <button onClick={() => GotoHome()} className="btn btn-purple" type="submit"
          id="loginFormSubmitBtn">SUBMIT</button>
     
        <div className="d-flex forgot">
          <Link className="login-forgot">Forgot Password?</Link></div></div>
    </div>
  </>
  )
}

export default LoginInput
  //    console.log({email,password})
    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb3JtdWxhcnlfZm9ybXVsYXJ5X3NhdmVfYW5kX3JldHVybl9idXR0b25zIjoiZmFsc2UiLCJmb3JtdWxhcnlfYWRkX256dWxtX21lZGljaW5lIjoiZmFsc2UiLCJ1c2VyX2RlbGV0ZSI6InRydWUiLCJyb2xlX2FkZCI6InRydWUiLCJ1c2VyX3JvbGVfZWRpdCI6InRydWUiLCJmb3JtdWxhcnlfYWRkX25vbl9uenVsbV9tZWRpY2luZSI6ImZhbHNlIiwiZW1haWxfc210cF9hZGQiOiJ0cnVlIiwicmVzdF9wYXNzd29yZF9lZGl0IjoidHJ1ZSIsImFwcF9zZXR0aW5nc19hZGQiOiJ0cnVlIiwicm9sZV9lZGl0IjoidHJ1ZSIsImZvcm11bGFyeV9mb3JtdWxhcnlfc2VhcmNoIjoiZmFsc2UiLCJ1c2VyX2VkaXQiOiJ0cnVlIiwiYWN0aW9uX2xpc3QiOiJ0cnVlIiwicGFnZV9lZGl0IjoidHJ1ZSIsImVtYWlsX3RlbXBsYXRlX2RlbGV0ZSI6InRydWUiLCJkYXNoYm9hcmRfbGlzdCI6InRydWUiLCJlbWFpbF90ZW1wbGF0ZV9lZGl0IjoidHJ1ZSIsInVzZXJfbGlzdCI6InRydWUiLCJ1c2VyX2FkZCI6InRydWUiLCJhY3Rpb25fYWRkIjoidHJ1ZSIsInN5c3RlbV9sb2dzX2xpc3QiOiJ0cnVlIiwic2VuZF9lbWFpbF9saXN0IjoidHJ1ZSIsIm9ubGluZV91c2Vyc19saXN0IjoidHJ1ZSIsImZvcm11bGFyeV9mb3JtdWxhcnlfY2FuY2VsX2J1dHRvbiI6ImZhbHNlIiwicGFnZV9saXN0IjoidHJ1ZSIsInBhZ2VfZGVsZXRlIjoidHJ1ZSIsImFjdGlvbl9lZGl0IjoidHJ1ZSIsImFjdGlvbl9kZWxldGUiOiJ0cnVlIiwicGFnZV9hZGQiOiJ0cnVlIiwicm9sZV9kZWxldGUiOiJ0cnVlIiwiZW1haWxfdGVtcGxhdGVfYWRkIjoidHJ1ZSIsImZvcm11bGFyeV9lZGl0X2Zvcm11bGFyeV9tZWRpY2luZSI6ImZhbHNlIiwiYmFuZGluZ19hZGQiOiJmYWxzZSIsInJvbGVfbGlzdCI6InRydWUiLCJsb2dpbl9hdWRpdF9saXN0IjoidHJ1ZSIsInBhZ2VfYWN0aW9uX2VkaXQiOiJ0cnVlIiwiZW1haWxfc210cF9lZGl0IjoidHJ1ZSIsImFwcF9zZXR0aW5nc19saXN0IjoidHJ1ZSIsImVtYWlsX3RlbXBsYXRlX2xpc3QiOiJ0cnVlIiwiZm9ybXVsYXJ5X3ZpZXdfZm9ybXVsYXJ5X21lZGljaW5lIjoiZmFsc2UiLCJlbWFpbF9zbXRwX2xpc3QiOiJ0cnVlIiwiYXBwX3NldHRpbmdzX2VkaXQiOiJ0cnVlIiwidXNlcl9wZXJtaXNzaW9uX2VkaXQiOiJ0cnVlIiwiZW1haWxfc210cF9kZWxldGUiOiJ0cnVlIiwic3ViIjoiNGIzNTJiMzctMzMyYS00MGM2LWFiMDUtZTM4ZmNmMTA5NzE5IiwiRW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJuYmYiOjE2NjM5MjY3NjMsImV4cCI6MTY2Mzk2OTk2MywiaXNzIjoiaHR0cHM6Ly9yYXVyYXV0ZXN0aW5nLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiRG9jdW1lbnRVc2VycyJ9.CLDLL6msR13m-NH39ZfXjJb9C6enoFxALN4Yi6-Femw");
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Cookie", "ARRAffinity=79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5; ARRAffinitySameSite=79e06db539acb57119e709978d2cf1da299e8341753d6f6345007fcab3f69bc5");

    // var raw = JSON.stringify({
    //   "userName": "nurse@gmail.com",
    //   "password": "Nurse@123",
    //   "remoteIp": "string",
    //   "latitude": "string",
    //   "longitude": "string"
    // });

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // };

    // fetch("https://apigateway1-qa.azurewebsites.net/gateway/api/User/login", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));




    // console.log({ email, password })
    //  axios.post('https://apigateway1-dev.azurewebsites.net/gateway/api/User/login',
    //   {
    //     email:email,
    //   password:password
    //   })
    //   .then(result=>{
    //     console.log(result)
    //     alert('succes')
    //   })
    //   .catch(error=>{
    //     console.log(error)
    //   })