import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Intro from "../Intro/Intro";
import Portfolio from "../Portfolio/Portfolio";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Intro></Intro>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
};

export default Home;
