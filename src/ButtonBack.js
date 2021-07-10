import React, { Component } from 'react';
import './App.css';

class ButtonBack extends Component {
    operar = (e) => {
        let num = this.props.label;
        this.props.onClick(num);
        e.preventDefault();
    }
    render() {
        return (
            <div className="button button-op d-flex" onClick={this.operar}>
                {this.props.label}
                {/* no pude hacerla transparente  <img id="backArrow" src="https://png.pngtree.com/png-clipart/20190517/original/pngtree-vector-back-icon-png-image_4267356.jpg"></img> */}
            </div>
        );
    }
}

export default ButtonBack;