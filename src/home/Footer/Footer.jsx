import React from 'react'
import './Footer.css'

function Footer() {
  let link = 'https://icons8.com/icon/60444/linkedin-circled'
  return (
    <div className='mainTouchContainer'>
      <div className='footerContainer'>
        <a href=' http://www.linkedin.com/in/pon-pradeep-798bb7232' target="_blank"><h3 className='linkedinText'>Linkedin</h3></a>
        <a href='https://github.com/Pradeeppon01'target="_blank"><h3 className='GithubText'>Github</h3></a>
      </div>
    </div>
  )
}
export default Footer;