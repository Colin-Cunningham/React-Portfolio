import React from "react";
import "./entry.css";
import Resume from "./Resume-CunninghamJPG.jpg";
import pdf from "./Resume-ColinCunningham.pdf";
import Cards from "../Projects/index";
import projects from "../../projects.json";



class Entry extends React.Component {
  render() {
    return (
      <div id="cont" className="jumbotron">
        <h2 id="proj">Featured Project</h2>
        <div id="strip" className="row">
          <div id="project" className="col-sm">
            <Cards
              name={projects[0].name}
              image={projects[0].image}
              link={projects[0].link}
              desc={projects[0].description}
            />
          </div>
        </div>
        <div id="banner" className="row">
          
          <h2>Resume</h2>
        </div>
        <div className="row">
          <img
            id="resume"
            className="img-rounded zoom"
            src={Resume}
            alt="resume"
          />
        </div>
        <h5>
          
          <a className="download" href={pdf} download>
            PDF Download
          </a>
        </h5>

      </div>
    );
  }
}

export default Entry;
