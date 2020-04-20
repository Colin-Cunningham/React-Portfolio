import React from "react";
import "./entry.css";
import Resume from "./Resume-CunninghamJPG.jpg";
import pdf from "./ResumeCunningham.pdf"
import Cards from "../Projects/index"
import projects from "../../projects.json"

class Entry extends React.Component {
  render() {
    return (
      <div id="cont" className="jumbotron">
        <h2 id="proj">Featured Projects</h2>
        <div id="strip" className="row">
          <div id="project" className="col-sm">
            <Cards name={projects[1].name} image={projects[1].image} link={projects[1].link} />
          </div>
          <div id="project" className="col-sm">
          <Cards name={projects[2].name} image={projects[2].image} link={projects[2].link} />
          </div>
          <div id="project" className="col-sm">
          <Cards name={projects[0].name} image={projects[0].image} link={projects[0].link} />
          </div>
        </div>
        <div id="banner" className="row"> <h2>Resume</h2> </div>
        <div className="row">
          <img
            id="resume"
            className="img-rounded zoom"
            src={Resume}
            alt="resume"
          />
        </div>
        <h5> <a className="download"href={pdf} download>PDF Download</a> </h5>
        <div id="banner" className="row"> <h2>Tech-Stack</h2> </div>
        <div className="row">
          <div className="col-sm col1" >Cool </div>
          <div className="col-sm col1" >Cool</div>
          <div className="col-sm col1" >Cool </div>
        </div>
      </div>
    );
  }
}

export default Entry;
