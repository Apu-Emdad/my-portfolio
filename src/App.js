import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import BikersBD from "./Components/ProjectDetail/Project-BikersBd/Project-BikersBd";
import TourGo from "./Components/ProjectDetail/Project-TourGo/Project-TourGo";
import CurePoint2 from "./Components/ProjectDetail/Project-CurePoint2/Project-CurePoint";

import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import FoodDelivery from "./Components/ProjectDetail/Project-food-delivery/Project-food-delivery";

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
          <Route path="/project-detail-food-delivery">
            <FoodDelivery></FoodDelivery>
          </Route>
          <Route path="/project-detail-BikersBD">
            <BikersBD></BikersBD>
          </Route>
          <Route path="/project-detail-TourGo">
            <TourGo></TourGo>
          </Route>
          <Route path="/project-detail-curepoint">
            <CurePoint2></CurePoint2>
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
