import React from 'react'
import { Link } from 'react-router-dom'
// import LoginScreen from '../screen/LoginScreen'

const DropdownFome = () => {

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
    <Link to='/'><button  type="submit" className="btn btn-danger btn-logout" >  Log Out</button></Link>

    </div>
  </form>
    </div>
  )
}

export default DropdownFome
