import React, {Component} from "react";
import "./style.css";
import projects from "./Projects.Json";
import a from "./media/bartender.PNG";
import b from "./media/finalConcept.png";
import c from "./media/dashboard.PNG";
import d from "./media/screenshot.PNG";
import e from "./media/scheduler.PNG";
import f from "./media/notes.PNG";
import _ from "lodash";

function Projects(){
    return(
        <div className="container">
            <h1 className="text-white border-bottom border-light">Portfolio</h1>

            <div className="row">
                <div className="p-4 col-md-6">
                    {/* {images} */}
                    <div className="text-center">
                        {/* {Title} */}
                        {/* {website link} */}
                        {/* {modal link} */}
                        {/* {Github link} */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;