import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Body from "./components/Wrapper1/Body"
import Footer from "./components/Footer/Footer"
import ReactAnimations from "./components/Home/index"
import Wrapper from "./components/Wrapper2/Wrapper"

function App() {
  return (
    <Router>
    <Navbar />
    <Body> 
    <Route exact path="/" component={ReactAnimations} />
    </Body>
    <Wrapper>
    <Route exact path="/" component={ReactAnimations} />
    </Wrapper>
    <Footer />
    </Router>
  );
}

export default App;
