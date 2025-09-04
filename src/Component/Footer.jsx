import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-black' style={{width:"100%", height:"320px", marginTop:"90px"}}>

      <div className='container' style={{color:"grey"}}>
        <div className='row' style={{padding:"50px"}}>
          <div className='col-md-3' >
            <h5 style={{color:"white"}}>avo</h5>
            <p>Far far away, behind<br/> the word mountains, <br/>far from the countries.</p>
          </div>
          <div className='col-md-2'>
            <h5 style={{color:"white"}}>Community</h5>
            <ul>
              <li>project</li>
              <li>Team</li>
              <li>Reviews</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className='col-md-2'>
            <h5 style={{color:"white"}}>About Us</h5>
            <ul>
              <li>Our Story</li>
              <li>Meet the team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className='col-md-2'>
            <h5 style={{color:"white"}}>Company</h5>
            <ul>
              <li>About Us</li>
              <li>Press</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className='col-md-3'>
            <h5 style={{color:"white"}}>Have a Questions?</h5>
            <p>	203 Fake St. Mountain View, San Francisco, California, USA</p>
            <li>	+2 392 3929 210</li>
            <li>	info@yourdomain.com</li>
          </div>
        </div>
      </div>
      <center>
        <h6 style={{color:"white"}}>Copyright ©2025 All rights reserved | This template is made with  by <span style={{color:"red"}}>jayesh patil</span></h6>
      </center>

    </div>
    </>
  )
}

export default Footer
