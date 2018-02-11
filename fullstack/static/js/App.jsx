// App.jsx
import React from "react";
import LightCommand from "./LightCommand";
import '../css/App.css';

export default class App extends React.Component {
  render () {
    return(
        <div id="main">
            <LightCommand name="Rainbow" />
        </div>
    );
  }
}