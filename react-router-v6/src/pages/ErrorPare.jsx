import {useNavigate, NavLink, useRouteError } from 'react-router-dom'
import './errorpage.css'

export const ErrorHandle = () => {
   
const error = useRouteError
const navigate = useNavigate()
const handleGoBack = ()=> {
  navigate(-1)
}

// if(error.status === 404){
return (
        <>
     <section className="page_404">
  <div className="container">
    <div className="row"> 
    <div className="col-sm-12 ">
    <div className="col-sm-10 col-sm-offset-1  text-center">
    <div className="four_zero_four_bg">
      <h1 className="text-center ">404</h1>
    
    
    </div>
    
    <div className="contant_box_404">
    <h3 className="h2">
    Look like you're lost
    </h3>
    
    <p>the page you are looking for not avaible!</p>
    
    {/* <NavLink to='/' className="link_404">Go to Home</NavLink> */}
    <button className='link_404' onClick={handleGoBack}>Go Back</button>
  </div>
    </div>
    </div>
    </div>
  </div>
</section>
        </>
    )
}
// console.log(error)

// return<h1>This page does not exist</h1>
