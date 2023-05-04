import React from 'react'
import image from './image.png'
import './PostCard.css'
import {Link} from 'react-router-dom'

function PostCard() {
  return (
    <>
      <div className='floatingDiv'>
          <div className='floatingMail'>
            <Link to='/contact'><i class="fa-solid fa-envelope"></i></Link>
          </div>
        </div>
      <div className='mainContainer'>
        <div className='postContainer'>
          <div className='postCardHeading'>
            <h1 className='postTransitionText'>HI, I'M <span >PRADEEP.</span></h1>
            <h1>A WEB DEVELOPER</h1>
            <h1>BASED IN INDIA.</h1>
          </div>
          <div className='postPara'>
            <p>Providing services for developing cool user interface websites for portfolio's,business,e-commerse sites and also landing pages.</p>
          </div>
          <div className='postButton'>
            <button className='postFirstButton'>Got a project?</button>
            <button className='postSecondButton'><Link to='/contact'>Let's talk</Link></button>
          </div>
        </div>
        <div className='photoContainer'>
          <img className='photoPhoto' src={image}></img>
        </div>
      </div>
    </>
  )
}
export default PostCard;