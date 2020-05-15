import React from "react";
import "./entry.css";
import Resume from "./Resume-CunninghamJPG.jpg";
import pdf from "./Resume-Cunningham.pdf";
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
              name={projects[4].name}
              image={projects[4].image}
              link={projects[4].link}
              desc={projects[4].description}
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
        <div id="banner" className="row">
          
          <h2>Tech-Stack</h2>
        </div>
        <div id="lang" className="row">
          <div className="col-sm col1">
            <h3 id="top">Languages</h3>
            <p id="title">JavaScript</p>
            <p id="title">HTML5</p>
            <p id="title">CSS</p>
            <p id="title">MongoDB</p>
            <p id="title">MySql</p>
          </div>
          <div className="col-sm col1">
            <h3 id="top">Libraries</h3>
            <p id="title">ReactJS</p>
            <p id="title">Express</p>
            <p id="title">Bootstrap/Bootstrap-React</p>
            <p id="title">Semantic UI</p>
          </div>
          <div className="col-sm col1">
            <h3 id="top">Misc.</h3>
            <p id="title">Gimp</p>
            <p id="title">Microsoft Office</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Entry;
