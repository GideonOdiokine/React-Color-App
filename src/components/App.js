import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";

import "./App.css";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Router } from "react-router";

class App extends Component {
  render() {
    // console.log(generatePalette(seedColors[4]))
    return (
      <Switch>
        <Route exact path="/" render={() => <h2>Palette List Goes Here</h2>} />
        <Route exact path="/palette/:id" render={() => <h2>Palette Id</h2>} />
      </Switch>
      //   <div className="App">
      //     <Palette palette={generatePalette(seedColors[1])} />
      //   </div>
    );
  }
}

export default App;
