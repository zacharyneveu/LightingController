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
        this.state = {toggle: false}
    }
    clickFunc() {
        //Create get request and update component with response
        $.get(window.location.href + (this.state.toggle==true ? 'Off' : this.props.name), (data) => {
            if(this.state.toggle == false) {
                this.setState({toggle: true});
            }
            else {
                this.setState({toggle: false});
            }
            console.log(data);
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