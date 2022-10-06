import React from 'react'
import Content from '../auth/Content';
// import Header from '../auth/Header';
import SideContent from '../auth/Side-Content';
import Dropdownbtn from '../dropdown/dropdownpay';
const HomeScreen = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12 col-lg-12 col-sm-12 col-xl-12 col-xxl-12 Home-header' >
          {/* <Header /> */}
          <Dropdownbtn/>
        </div>
    
  
       <div className='all-content col-12 col-lg-12 col-sm-12 col-xl-12 col-xxl-12 d-flex' style={{height: '100vh'}}>
    
          <nav className='side-conternt col-2'  >
            <SideContent />block
            </nav>

          <div className='content-main col' >
            <Content />
           
      
          </div>
         
        </div>
       
      </div>
    </div>
 
  )
}

export default HomeScreen;