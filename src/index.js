import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import App from "./components/App";
// take the react component and show it on the screen
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
