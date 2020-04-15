import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Body from "./components/Wrapper1/Body"
import Footer from "./components/Footer/Footer"
import About from "./components/Home/index"
import Wrapper from "./components/Wrapper2/Wrapper"
import Entry from "./components/Entry/Entry"
import Contact from "./components/Contact/index"

function App() {
  return (
    <Router>
    <Navbar />
    <Body> 
    <Route path="/" component={About} />
    </Body>
    <Wrapper>
    <Route exact path="/" component={Entry} />
    <Route exact path="/contact" component={Contact} />
    </Wrapper>
    <Footer />
    </Router>
  );
}

export default App;
