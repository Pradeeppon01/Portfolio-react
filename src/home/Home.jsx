import Footer from './Footer/Footer'
import PostCard from './PostCard/PostCard'
import Projects from './Projects/Projects'
import HireMe from './HireMe/HireMe'
import InTouch from './InTouch/InTouch'
import About from './about/About'
import Flip from './Flip/Flip'

export default function Home() {
  return (
    <div className='Home_container'>
      <PostCard/>
      <Projects/>
      <HireMe/>
      <Footer/>
      <InTouch/>
      <Flip/>
      <About/>
    </div>
  )
}