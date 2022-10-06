import { useState } from "react";

import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaUserCog } from 'react-icons/fa';
import { CDropdownToggle, CDropdown, CDropdownItem, CDropdownMenu } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import DropdownFome from '../dropdown/DropdownFome';
export default function Dropdownbtn() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className='container-fluid'>
    <div className='row'>
    <nav className='navigation col-12 d-flex'>
    <Link style={{ textDecoration: 'none', color: 'black' }} >
            <div className='header-image'>
              <img className='logo-image' src={require('../Image/logo/logo.png')} alt="" />
              <span className='logo-text'>Raurau Ngaehe</span>
            </div>
          </Link >
          
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        
      </button>
      <div
        className={
          isNavExpanded ? "" : "header-content"
        }
      >
        <ul>
        <div className=' header-content d-flex'>
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
              <input placeholder='search..' />
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
        </ul>
      </div>
    </nav>
    </div>
    </div>
  );
}
