import React from 'react'
import { Link } from 'react-router-dom';
import {FaSearch} from  'react-icons/fa';
function SideContent() {
    return (
        <div className='container-fluid'>
        <div className='row side-main-content'>
          <div className='side-content-icon'>  
          <Link className='Side-content-link'>
            <FaSearch/>  Formulary Statistics
            </Link>
            </div>
            <div className='side-content-icon'>  
          <Link className='Side-content-link'>
            <FaSearch/>  Formulary Statistics
            </Link>
            </div>
            <div className='side-content-icon'>  
          <Link className='Side-content-link'>
            <FaSearch/>  Formulary Statistics
            </Link>
            </div>
        </div>
        </div>
    )
}

export default SideContent
