import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <>
      <div className='headerContainer'>
        <div className='logoName'>
          <Link to="/"><h3 className='logoText'>moxa.</h3></Link>
        </div>
        <div class='listContainer'>
          <ul class='ulList'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/contact'>Contact </NavLink></li>
          </ul>
        </div>
        <div>
          <button className='headerButton'><a href='https://www.instagram.com/pon_pradip_/?next=%2F' target='_blank'>Let's Talk</a></button>
        </div>
      </div>
    </>
  )
}
export default Header;