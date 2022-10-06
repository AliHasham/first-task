import React from 'react'
// import image from '../Image/login.png'
const TexImage = () => {
  return (
    <div className='textiamge'>
    <div className='text-textimage'>  <h1>
      RAURAU NGAEHE
      </h1>
      <p>WE CAN, I CAN - <span style={{color:'#8c72ad'}}>LETS BEAT CANCER</span>
</p>
</div>
     <img src={require('../Image/login.png')} alt='nono'/>
     <p className='textiamge-para'>Version 1.12.0 Beta Release</p>
    </div>
  )
}

export default TexImage
