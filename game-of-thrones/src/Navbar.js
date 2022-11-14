import {React, useState, useEffect } from "react"
import AboutMe from "./components/AboutMe";


function NavBar () {

 
 return (

      <div className="navBar">
        <h1 className="title"> Game Of Thrones</h1>
        <h1 className="aboutMe"> <AboutMe/></h1>
      </div>
    );
  };
    
export default NavBar;
