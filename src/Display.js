import React, { Component } from 'react';
import './App.css';

class Display extends Component {

    render() {
        return (
            <div id="display">
                <div id="result"> {this.props.info.resultado} </div>
                <div id="num1"> {this.props.info.display} </div>

            </div>
        );
    }
}

export default Display;