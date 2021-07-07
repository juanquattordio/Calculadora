import React, { Component } from 'react';
import './App.css';

class Display extends Component {

    render() {
        return (
            <div id="display"> {this.props.info} </div>
        );
    }
}

export default Display;