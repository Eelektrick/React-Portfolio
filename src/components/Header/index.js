import React, {useState} from "react";
import "./style.css";
import Resume from "./Corey Post Resume.pdf";
import {HashLink as Link} from "react-router-hash-link";

// got navbar button code from https://medium.com/@johnne01/how-to-toggle-bootstrap-navbar-collapse-button-in-react-without-jquery-1d5c2fb0751c
//lines 8-10, 18, and 15 to operate the nav button when screen is small
const Navbar = props =>{
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light absolute-top">
      <h1 id="fancy">Corey Post</h1>
      <button className="navbar-toggler btn btn-light" id="tButton" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarMenu">
          <ul className="navbar-nav ml-auto navFont">
              <li className="nav-item nav-link">
                  <Link to="/about" className={window.location.pathname === "/about" || window.location.pathname === "/about" ? "nav-link active" : "nav-link text-white"}>About Me</Link>
              </li>
              <li className="nav-item nav-link">
                {/*Found the code to open resume in a different tab from stack overflow*/}
                  <a className="nav-link text-white" target="_blank" rel="noopener noreferrer" href={Resume}>Resume</a>
              </li>
              <li className="nav-item nav-link">
                  <Link to="/portfolio" className={window.location.pathname === "/portfolio" || window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link text-white"}>Portfolio</Link>
              </li>
              <li className="nav-item nav-link">
                  <Link to="/contact" className={window.location.pathname === "/contact" || window.location.pathname === "/contact" ? "nav-link active" : "nav-link text-white"}>Contact</Link>
              </li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;