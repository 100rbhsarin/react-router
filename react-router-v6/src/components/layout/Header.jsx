
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
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="movie">Movies</NavLink></li>
      <li><NavLink to="about" >About</NavLink></li>
      <li><NavLink to="contact">Contact</NavLink></li>
    </ul>
    <div className="navbar-auth">
      <button className="btn login">Log In</button>
      <button className="btn signup">Sign Up</button>
    </div>
  </nav>
        </>
    )

}