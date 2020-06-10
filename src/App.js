import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Wrapper1/Body";
import Footer from "./components/Footer/Footer";
import About from "./components/Home/index";
import Wrapper from "./components/Wrapper2/Wrapper";
import Entry from "./components/Entry/Entry";
import projects from "./projects.json"
import Cards from "./components/Projects/index"

class App extends React.Component {

  state = {
    projects: projects,
  }




  render() {
    return (
      <Router>
        <Navbar />
        <Body>
          <Route path="/" component={About} />
        </Body>
        <Wrapper>
          <Route exact path="/" component={Entry} />
          <Route exact path="/projects">
            {this.state.projects.map(project =>(
              <Cards
                name={project.name}
                image={project.image}
                link={project.link}
                date={project.date}
                desc={project.description}
              />
            ))}
          </Route>
        </Wrapper>
        <Footer />
      </Router>
    );
  }
}
export default App;
