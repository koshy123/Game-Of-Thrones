import React from "react"
import {Link} from "react-router-dom"

function NavBar () {
return (
    // NavBar
      <div className="nav-bar">
      <Link to= "/components/Quote"> <h1 className="title"> Quotes </h1></Link> 
      <Link to='/components/AboutMe' className='about-me'><h1> AboutMe </h1></Link>
      <h1>House of the Dragon</h1>
      </div>
    );
  };
    
export default NavBar;
