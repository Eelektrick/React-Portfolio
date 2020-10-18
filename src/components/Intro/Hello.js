import React from "react";
import "./style.css";

function Hello() {
  return (
    // <!-- Intro about me -->
    <div className="container">
      <div className="row p-5"></div>
      <div className="row p-5"></div>
      <div className="row pr-5 mr-5">
        <div className="text-center col-md-12 text-white pr-5" id="size">
          Corey Post
          <br />I'm a Full Stack Web Developer
        </div>
      </div>
      <div className="row p-5"></div>
      <div className="row p-5"></div>
    </div>
  );
}

export default Hello;