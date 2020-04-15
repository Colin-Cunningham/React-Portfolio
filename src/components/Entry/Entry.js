import React from "react";
import "./entry.css";
import Resume from "./Resume-CunninghamJPG.jpg";

class Entry extends React.Component {
  render() {
    return (
      <div id="cont" className="jumbotron">
        <h2 id="proj">Featured Projects</h2>
        <div id="strip" className="row">
          <div id="projects" className="col-sm">
            <p>Cool</p>
          </div>
          <div id="projects" className="col-sm">
            <p>Cool</p>
          </div>
          <div id="projects" className="col-sm">
            <p>Cool</p>
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
