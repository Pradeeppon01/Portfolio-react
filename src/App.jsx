import './App.css'
import Home from './home/Home'
import Header from './header/Header'
import Credits from './credit/Credits'
import {Route,Routes} from 'react-router-dom'
import Contact from './contact/Contact'

export default function App() {
  return (
    <div className='app_main_container'>
      <Header/>
      <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </>
      <Credits className='credits_app_container'/>
    </div>
  )
}
