import React from 'react';
var $ = require('jquery');

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { greeting: 'Hello ' + this.props.name };
        this.getPythonHello = this.getPythonHello.bind(this);
        this.personalizeGreeting = this.personalizeGreeting.bind(this);
    }

    personalizeGreeting(greeting) {
        this.setState({ greeting: greeting + ' ' + this.props.name + '!' });
    }

    getPythonHello() {
        //Create get request and update component with response
        $.get(window.location.href + 'hello', (data) => {
            console.log(data);
            this.personalizeGreeting(data);
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <hr />
                <button bsSize="large" bsStyle="danger"
                    onClick={this.getPythonHello}>
                    Say Hello!
                </button>
            </div>
        )
    }
}