import React from "react";

function Card(props){
    return(
        <div>
      <section
        className="container-section scrollspy"
        id="portfolio"
        style={{ margin: "20px" }}
      >
        <div className="col s12 m3 l3">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" alt="project's img" src={props.img} />
            </div>
            <div className="card-content" style={{ backgroundColor: "black" }}>
              <span
                className="card-title activator white-text"
                style={{ fontSize: "20px" }}
              >
                {props.name}
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a
                  className="btn-small"
                  href={props.deployLink}
                  style={{ marginTop: "10px", marginRight: "10px" }}
                >
                  <FaWindowMaximize style={{ marginTop: "10px" }} />
                </a>
                <a
                  className="btn-small"
                  href={props.githubLink}
                  style={{ marginTop: "10px" }}
                >
                  <FaGithub style={{ marginTop: "10px" }} />
                </a>
              </p>
            </div>
            <div className="card-reveal" style={{ backgroundColor: "black" }}>
              <span className="card-title activator" style={{ color: "white" }}>
                {props.name}
                <i
                  className="material-icons right"
                  style={{ color: "white" }}
                  data-rel={props.id}
                >
                  close
                </i>
              </span>
              <p>{props.detail}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
}

export default Card;