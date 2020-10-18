import React from "react";
import "./style.css";

function Hello() {
  return (
    // <!-- Intro about me -->
    <div className="container-fluid">
      <div className="row pr-5 mr-5">
        <div className="text-center col-md-12 text-white" id="size">
          Corey Post
          <br /> I'm a Full Stack Web Developer
        </div>
      </div>
      <div className="row pt-3"></div>
    </div>
  );
}

export default Hello;