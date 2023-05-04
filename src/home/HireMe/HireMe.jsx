import React from 'react'
import './HireMe.css'

function HireMe(){
  return(
    <>
      <div className='hireMeContainer'>
        <h2 className='hireMeText1'>Wanna Hire Me?</h2>
        <h3 className='hireMeText2'>Take a 👁️ at my CV..</h3>
        <a href="https://drive.google.com/file/d/1kMbd0xCXGIymxlSn8wQVO4ni_bwWsCHk/view?usp=drivesdk" target='_blank'><button className='cvButton'>Resume</button></a>
      </div>
    </>
  )
}
export default HireMe;