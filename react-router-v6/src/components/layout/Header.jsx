
import { NavLink } from 'react-router-dom'
import './header.css'


export const Header = ()=>{



    return(
        <>
      <nav className="navbar">
    <div className="navbar-brand">
      <h1 className="logo">imdb.hub</h1>
    </div>
    <ul className="navbar-links">
      <li><NavLink to="/" className={({ isActive }) => 
      isActive ? 'nav-link active-link' : 'nav-link'
     }>Home</NavLink></li>
      <li><NavLink to="movie" className={({ isActive }) => 
      isActive ? 'nav-link active-link' : 'nav-link'
     }>Movies</NavLink></li>
      <li><NavLink to="about" className={({ isActive }) => 
      isActive ? 'nav-link active-link' : 'nav-link'
     }>About</NavLink></li>
      <li><NavLink to="contact" className={({ isActive }) => 
      isActive ? 'nav-link active-link' : 'nav-link'
     }>Contact</NavLink></li>
    </ul>
    <div className="navbar-auth">
      <button className="btn login">Log In</button>
      <button className="btn signup">Sign Up</button>
    </div>
  </nav>
        </>
    )

}