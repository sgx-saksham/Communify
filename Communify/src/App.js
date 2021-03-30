import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import Header from "./components/HeaderOne";
import Header from "./components/Header";

import Tables from "./components/Tables";
import Slides from "./components/Slides";

function App() {
  return (
    <div>
      <Header />
      <Slides />
    </div>
    // <Carousel/>
  );
}

export default App;
