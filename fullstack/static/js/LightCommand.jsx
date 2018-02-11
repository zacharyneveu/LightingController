import React from 'react';
import '../css/LightCommand.css';
var $ = require('jquery');

/**A basic button which will send a command to the arduino
 * ex: Rainbow, Cycle etc.
 */
export default class LightCommand extends React.Component {
    constructor(props) {
        super(props)
        this.clickFunc = this.clickFunc.bind(this);
    }
    clickFunc() {
        //Create get request and update component with response
        $.get(window.location.href + this.props.name, (data) => {
            console.log(data);
            this.personalizeGreeting(data);
        });
    }
    render() {
        return (
            <button onClick={this.clickFunc} className="LightCommandButton">
                <h1>{this.props.name}</h1>
            </button>
        );
    }


}