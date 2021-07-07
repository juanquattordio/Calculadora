import React, { Component } from 'react';
import './App.css';

class Button extends Component {
    render() {
        let className = 'button';
        switch (this.props.type) {
            case 'op': { className += ' button-op'; break }
            case 'num': { className += ' button-num'; break }
            default: { className += ' button-result'; break }
        }


        return (
            <div className={className}>
                {this.props.label}
            </div>
        );
    }
}

export default Button;