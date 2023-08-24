import './App.scss'   
import './App.css'   
import  Particles from  "react-tsparticles"  ; 
import {loadFull} from "tsparticles";
import {Routes,Route,useLocation} from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import Resume from './containers/resume'
import Skills from './containers/Skills'
import Portfolio from './containers/portfolio'
import Contact from './containers/contact'
import Navbar from './components/navBar'
import particles from './utils/particles';
function App() {     
  const location=useLocation();
  console.log(location);
  const handleInit=async(main)=>{
    await loadFull(main)
  }   
  const renderParticleJsInHomePage=location.pathname === "/" ;
  return (
<div className='App'>   
{
  renderParticleJsInHomePage   &&    (
  <Particles id='particles' options={particles} init={handleInit}/>

)}     


  <Navbar/>  
  <div className='App__main-page-content'>  
  <Routes>
    <Route index path='/' element={<Home/>}/> 
    <Route  path='/about' element={<About/>}/> 
    <Route  path='/resume' element={<Resume/>}/>
    <Route  path='/skills' element={<Skills/>}/>  
    <Route  path='/portfolio' element={<Portfolio/>}/>  
    <Route  path='/Contact' element={<Contact/>}/>
</Routes>

  </div>


</div>
  )
}

export default App
