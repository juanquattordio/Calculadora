import React, { Component } from 'react';
import './App.css';

class Button extends Component {

    operar = (e) => {
        let num = this.props.label;
        this.props.onClick(num);
        e.preventDefault();
    }

    render() {
        let className = 'button';
        switch (this.props.type) {
            case 'op': { className += ' button-op'; break }
            case 'num': { className += ' button-num'; break }
            default: { className += ' button-result'; break }
        }
        return (
            <div className={className} onClick={this.operar}>
                {this.props.label}
            </div>
        );
    }
}

export default Button;