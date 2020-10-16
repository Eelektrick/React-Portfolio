import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light absolute-top">
      <h1 id="fancy">Corey Post</h1>
      <button class="navbar-toggler btn btn-light" id="tButton" type="button" data-toggle="collapse" data-target="#navbarMenu">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav ml-auto navFont">
              <li class="nav-item">
                  <a class="nav-link text-white" href="aboutme.html">About Me</a>
              </li>
              <li class="nav-item">
                {/*Found the code to open resume in a different tab from stack overflow*/}
                  <a class="nav-link text-white" target="_blank" rel="noopener noreferrer" href="assets/images/CoreyPostResume.pdf">Resume</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link text-white" href="portfolio.html">Portfolio</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link text-white" href="contact.html">Contact</a>
              </li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;