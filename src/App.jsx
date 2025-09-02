import React from 'react'
import Navbar from './Component/Navbar.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Component/Home.jsx';
import Service from './Component/Service.jsx';
import Work from './Component/Work.jsx';
import About from './Component/About.jsx';
import Footer from './Component/Footer.jsx';

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Work' element={<Work/>}/>
        <Route path='/Service' element={<Service/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
