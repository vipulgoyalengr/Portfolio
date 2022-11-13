import React from 'react';
import ExampleDoc from '../components/Resume.pdf'
const About = () => {
  return (
    <div>
      <h1 className='mx-5 my-3'>About Me</h1>
      <hr className='mx-5'></hr>
      <div className='container'>
        <div className='row' >
            <h3 className='col-md-6 my-4'> About myself </h3>
            <div className='col-md-6 my-4 d-flex justify-content-center'> Self-motivated Developer with experience of 1+ year of collaborating and working on multiple web based projects. Passionate, hardworking coder with penchant for developing customized interfaces. Enthusiastic team player ready to contribute to company success. </div>
        </div>
        <div className='row' >
            <h3 className='col-md-6 my-4'> Skills</h3>
            <div className='col-md-6 my-4 '>  
            <span className='mx-4 '>Angular</span>
            <hr/>
            <span className='mx-4 '>Reactjs</span>
            <hr/>
            <span className='mx-4 '>MEAN Stack</span>
            <hr/>
            <span className='mx-4 '>MERN Stack</span>
            <hr/>
            <span className='mx-4 '>.Net MVC</span>
            <hr/>
            <span className='mx-4 '>Python</span>
            <hr/>
            <span className='mx-4 '>MySQL</span>
            <hr/>
            <span className='mx-4 '>HTML</span>
            <hr/>
            <span className='mx-4 '>CSS</span>
            {/* <div class="progress mx-4 my-2">
            <div class="progress-bar" role="progressbar" aria-label="Example with label" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
            </div> */}
            </div>
        </div>
        <div className='row' >
            <h3 className='col-md-6 my-4'> Resume </h3>
            <div className='col-md-6 my-4 d-flex justify-content-center'><a href={ExampleDoc} download="Vipul Resume" style={{textDecoration:"none",color:"white"}}> <button type="button" class="btn btn-success"> <i class="bi bi-download"></i> Download Resume</button></a>
</div>
        </div>
      </div>
    </div>
  )
}

export default About
