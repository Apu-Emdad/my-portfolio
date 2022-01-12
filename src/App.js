import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Project1 from "./Components/ProjectDetail/Project1/Project1";
import Project2 from "./Components/ProjectDetail/Project2/Project2";
import Project3 from "./Components/ProjectDetail/Project3/Project3";
import Project4 from "./Components/ProjectDetail/Project4/Project4";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Project0 from "./Components/ProjectDetail/Project0/Project0";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/projectdetail0">
            <Project0></Project0>
          </Route>
          <Route path="/projectdetail1">
            <Project1></Project1>
          </Route>
          <Route path="/projectdetail2">
            <Project2></Project2>
          </Route>
          <Route path="/projectdetail3">
            <Project3></Project3>
          </Route>
          <Route path="/projectdetail4">
            <Project4></Project4>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
