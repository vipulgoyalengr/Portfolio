import React from 'react'
import '../components/Home.css'
const Home = () => {
  return (
    <div className='container c1' >
      <div className='row'>
        <div className='col-md-6 d-flex justify-content-center'>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar"/>
        </div>
        <div className='col-md-6 col11' >
    <h1>Hi, I'm <p className='name' style={{display:'inline'}}>Vipul Goyal</p></h1>
    <h3>I'm a Full Stack Developer</h3>
    
    <span class="fa-li"><i class="bi bi-9-circle mx-3"></i></span>List icons can
    
    <div><i class="bi bi-linkedin mx-3"></i><i class="bi bi-github mx-3"></i></div>
 
        </div>
      </div>

    </div>
  )
}

export default Home
