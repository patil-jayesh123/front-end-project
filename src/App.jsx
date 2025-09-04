import React from 'react'
import Navbar from './Component/Navbar.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Component/Home.jsx';
import Work from './Component/Work.jsx';
import About from './Component/About.jsx';
import Footer from './Component/Footer.jsx';
import Blog from './Component/Blog.jsx';
import Contact from './Component/Contact.jsx';

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Work' element={<Work/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
