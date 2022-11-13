import React from 'react'
import project1 from '../components/pr0.png'
import project2 from '../components/pr1.png'
import project3 from '../components/pr2.png'
import project4 from '../components/pr3.png'
import project5 from '../components/pr4.jpg'
import project6 from '../components/pr5.jpg'

const Projects = () => {
  return (
    <>
    <h1 className='mx-5 my-3'>My Projects</h1>
    <hr className='mx-5'></hr>
      <div className='container my-5'>
        <div className='row '>
        <div className='col-md-6'>
        <div className="card" style={{width: "35rem"}}>
        <img src={project1} className="card-img-top" alt="Portfolio Projects" style={{height:"290px",width:"100%"}}/>

  
</div>
<br/>
<span>Project 1 - NewsMonkey</span>
<p>(React)</p>
<a href="https://github.com/vipulgoyalengr/NewsMonkey.git" target="_blank" > <button type="button" class="btn " style={{color:"white",borderColor:"white"}}> <i class="bi bi-code-slash"></i> View Github</button></a>
        </div>

        <div className='col-md-6'>
        <div className="card" style={{width: "35rem"}}>
        <img src={project2} className="card-img-top" alt="Portfolio Projects" style={{height:"290px",width:"100%"}}/>

  
</div>
<br/>

<span>Project 2 - INoteBook</span>
<p>(React)</p>
<a href="https://github.com/vipulgoyalengr/INotebook.git" target="_blank" > <button type="button" class="btn " style={{color:"white",borderColor:"white"}}> <i class="bi bi-code-slash"></i> View Github</button></a>

        </div>
        </div>

        <div className='row my-3'>
        <div className='col-md-6'>
        <div className="card" style={{width: "35rem"}}>
        <img src={project3} className="card-img-top" alt="Portfolio Projects"style={{height:"290px",width:"100%"}}/>
 
  
</div>
<br/>

<span>Project 3 - TextUtils</span>
<p>(React)</p>
<a href="https://github.com/vipulgoyalengr/TextUtils.git" target="_blank" > <button type="button" class="btn " style={{color:"white",borderColor:"white"}}> <i class="bi bi-code-slash"></i> View Github</button></a>

        </div>

        <div className='col-md-6'>
        <div className="card" style={{width: "35rem"}}>
        <img src={project4} className="card-img-top" alt="Portfolio Projects"style={{height:"290px",width:"100%"}}/>
  
  
</div>
<br/>

<span>Project 4 - Portfolio</span>
<p>(React)</p>
<a href="https://github.com/vipulgoyalengr/Portfolio.git" target="_blank" > <button type="button" class="btn " style={{color:"white",borderColor:"white"}}> <i class="bi bi-code-slash"></i> View Github</button></a>

        </div>
        </div>
        <div className='row my-3'>
        <div className='col-md-6'>
        <div className="card" style={{width: "35rem"}}>
        <img src={project5} className="card-img-top" alt="Portfolio Projects"style={{height:"290px",width:"100%"}}/>

  
</div>
<br/>

<span>Project 5 - Diagnostic Lab Management</span>
<p>(Angular & Nodejs)</p>
<a href="https://github.com/vipulgoyalengr/Diagnostic-Lab-Management.git" target="_blank" > <button type="button" class="btn " style={{color:"white",borderColor:"white"}}> <i class="bi bi-code-slash"></i> View Github</button></a>

        </div>

        <div className='col-md-6'>
        <div className="card" style={{width: "35rem"}}>
        <img src={project6} className="card-img-top" alt="Portfolio Projects"style={{height:"290px",width:"100%"}}/>
 
  
</div>
<br/>

<span>Project 6 - Blog Website</span>
<p>(Angular & Nodejs)</p>
<a href="https://github.com/vipulgoyalengr/Blog-Website.git" target="_blank" > <button type="button" class="btn " style={{color:"white",borderColor:"white"}}> <i class="bi bi-code-slash"></i> View Github</button></a>

        </div>
        </div>
      </div>
    </>
  )
}

export default Projects
