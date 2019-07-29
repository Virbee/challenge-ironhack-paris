import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Temperature from "./components/Temperature";
import Navbar from "./components/Navbar";
import CustomizedImage from "./components/CustomizedImage";
import Celebrities from "./components/Celebrities";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/temperature" component={Temperature} />
        <Route path="/customize-image" component={CustomizedImage} />
        <Route path="/celebrities" component={Celebrities} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
