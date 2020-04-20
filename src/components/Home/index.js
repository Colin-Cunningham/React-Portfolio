import React from "react";
import styled, {keyframes} from "styled-components";
import {fadeIn} from "react-animations";
import "./home.css";
import image from "./bestone.jpg"
const fadeAnimation = keyframes`${fadeIn}`

const Fade1 = styled.div`animation: 8s ${fadeAnimation}`
const Fade2 = styled.div`animation: 3s ${fadeAnimation}`



class About extends React.Component {

  render() {
    return (
      <div className="jumbotron">
       <Fade2><h1>Welcome to my Portfolio</h1></Fade2>
          <div className="col-sm">
           <Fade1>
             <p id="about">
              Hello! My name is Colin and I am a full-stack web developer. I am
              originally from a small town in Connecticut but now reside just
              south of Philadelphia. I attended Choate Rosemary Hall before
              getting my BA in political science from Muhlenberg College in
              Allentown PA. I currently work as a college and career coach at
              Overbrook High school in West Philly, and to answer your question
              yes it is the school from the fresh prince song. I am an ex-football
              player who has seen every Marvel movie ten times. I have found a
              passion for web-developing that has consumed my everyday life, and
              makes me eager to learn more. I am currently seeking employment
              opportunities and would love to chat about it.
            </p>
            <img id="colin" className="ui centered image" src={image} alt="pictureofme"/>
            </Fade1> 
          </div>
        </div>
    );
  }

}

export default About

