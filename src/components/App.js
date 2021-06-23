import React, { Component } from 'react';

// import {Route,Switch,NavLink} from 'react-router-dom';

import './App.css'
import Palette from './Palette';
import seedColors from './seedColors'
import {generatePalette} from './colorHelpers'

 class App extends Component {
    render() {
        // console.log(generatePalette(seedColors[4]))
        return (
            <div className="App">
                <Palette palette={generatePalette(seedColors[1])} />
            </div>
        )
    }
}


export default App;