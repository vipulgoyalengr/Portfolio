import React from 'react'
import '../components/Home.css'
const Home = () => {
  return (
    <div className=' c1 ' >
      <div className='row'>
        <div className='col-md-6 d-flex justify-content-center'>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"/>
        </div>
        <div className='col-md-6 col11 ' >
    <h1>Hi, I'm <p className='name' style={{display:'inline'}}>Vipul Goyal</p></h1>
    <h3>I'm a Full Stack Developer</h3>
    
    <span class="fa-li" style={{fontSize:"calc(7px + 2vmin)"}}><i class="bi bi-briefcase-fill mx-3" style={{color:"#f76f00"}}></i> Developer at TCS</span>
    <span class="fa-li " style={{fontSize:"calc(7px + 2vmin)"}}><i class="bi bi-geo-alt-fill mx-3" style={{color:"#f00a0a"}}></i> Jaipur, Rajasthan,India</span>
    <span class="fa-li " style={{fontSize:"calc(7px + 2vmin)"}}><i class="bi bi-envelope-fill mx-3" style={{color:"#ffffff"}}></i> vipulgoyal.engr@gmail.com</span>

    <div className='my-3'><a href="https://www.linkedin.com/in/vipul-goyal-861194186" target="_blank"><i class="bi bi-linkedin mx-3" style={{fontSize:"41px"}}></i></a><a href='https://github.com/vipulgoyalengr' target="_blank"><i class="bi bi-github mx-3" style={{fontSize:"41px"}}></i></a>
    {/* <i class="bi bi-instagram mx-3"></i> */}
    </div>
        </div>
      </div>

    </div>
  )
}

export default Home
