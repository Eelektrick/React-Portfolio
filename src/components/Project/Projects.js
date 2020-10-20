import React, {Component} from "react";
import Card from "./Card";
import projects from "./Projects.json";
import a from "./media/bartender.PNG";
import b from "./media/finalConcept.png";
import c from "./media/dashboard.PNG";
import d from "./media/screenshot.PNG";
import e from "./media/scheduler.PNG";
import f from "./media/notes.PNG";
import _ from "lodash";

class Projects extends Component {
    state = {
      projects,
      projectsImg: [
        a,
        b,
        c,
        d,
        e,
        f,
      ],
    };
    render() {
      console.log(projects);
      return (
        <div className="container">
          <h1 className="text-white border-bottom border-light">Portfolio</h1>
  
          <div className="row">
            {_.zip(this.state.projects, this.state.projectsImg).map((app) => (
              <Card
                key={app[0].id}
                name={app[0].name}
                detail={app[0].detail}
                img={app[1]}
                deployLink={app[0].deployLink}
                githubLink={app[0].githubLink}
              />
            ))}
          </div>
        </div>
      );
    }
}

  export default Projects;