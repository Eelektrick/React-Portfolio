import React, {Component} from "react";
import "./style.css";
import Resume from "./CoreyPostResume.pdf";
import {HashLink as Link} from "react-router-hash-link";

export default class Navbar extends Component{
  constructor(props){
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }
  render() {
    const show = (this.state.menu) ? "show" : "" ;
    return (
      <nav className="navbar navbar-expand-lg navbar-light absolute-top">
        <h1 id="fancy">Corey Post</h1>
        <button className="navbar-toggler btn btn-light" id="tButton" type="button" data-toggle="collapse" data-target="#navbarMenu" onClick={this.toggleMenu}>
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse" + show} id="navbarMenu">
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
}

// export default Navbar;