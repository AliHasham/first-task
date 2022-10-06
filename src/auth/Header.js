import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaUserCog } from 'react-icons/fa';
import { CDropdownToggle, CDropdown, CDropdownItem, CDropdownMenu } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import DropdownFome from '../dropdown/DropdownFome';

const Header = () => {

  return (
   
        <div className='col-12 ' >
          <Link className='col-2' style={{ textDecoration: 'none', color: 'black' }} >
            <div className='header-image '>
              <img className='logo-image' src={require('../Image/logo/logo.png')} alt=""  />
              <span className='logo-text'>Raurau Ngaehe</span>
            </div>
          </Link>

          <div className=' header-content '>
            <div className='header-link'><Link className='link'>Prescribing</Link></div>
            <div className='header-link'><Link className='link'>Rule Builder</Link></div>
            <div className='header-link'><Link className='link'>Medication Administration</Link></div>
            <div className='header-link'>
              <CDropdown>
                <CDropdownToggle color="white">Pharmacy</CDropdownToggle>
                <CDropdownMenu>


                  <CDropdownItem path='/pa'>Pharmacy Medication</CDropdownItem>
                  <CDropdownItem path='/pa'>  Pharmacy  Administration</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </div>
            <div className='header-link'><Link className='link'>Patient Queries</Link></div>
            <CDropdown>
              <CDropdownToggle color="white">System Administration

              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem path='/pa'>Formulary Builder</CDropdownItem>
                <CDropdownItem path='/pa'>  Protocol Builder</CDropdownItem>
                <CDropdownItem path='/pa'>User Management</CDropdownItem>
                <CDropdownItem path='/pa'> Configurations</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <div className='search d-flex'>
              <input className='searchinput'  placeholder='search..'/>
              <div className='icon-header' ><FaSearch /></div>
            </div>
            <div className='All-icon'>
              <div className='icon'> <FaBell /></div>
              <div className='icon'> <FaUserCog /></div>
              <div className='icon'><FaBell /></div>
              <div className='icon'><FaUserCog /></div>
              <div className='icon'><FaBell /></div>
              <div className='icon'><FaUserCog /></div>
            </div>
            <CDropdown>
              <CDropdownToggle color="white">Test admin</CDropdownToggle>
              <CDropdownMenu>

                
               <DropdownFome />
              </CDropdownMenu>
            </CDropdown>
          </div>

          </div>

 
  
  )
}

export default Header
