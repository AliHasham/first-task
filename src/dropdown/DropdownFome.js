import React from 'react'
import { Link,useNavigate} from 'react-router-dom'
// import LoginScreen from '../screen/LoginScreen'

const DropdownFome = () => {
  const navigate = useNavigate();
const deletData =()=>{
 
  localStorage.removeItem('user')
  navigate ("/");
}
  return (
    <div>
        <form className='logout-fome' >
    <div className="mb-3">
     <img src={('')} alt=''/>
     <h3>Test Admin</h3>
     <p>Admin
</p>
<h3>Practice Location<br/> Nevada</h3>
    </div>
    <div className='fome-button'>
    <button type="submit" className="btn btn-secondary btn-user">User Setting</button>
   <button onClick={()=>deletData()}  type="submit" className="btn btn-danger btn-logout" >  Log Out</button>

    </div>
  </form>
    </div>
  )
}

export default DropdownFome
