import React, { Component } from 'react';
import './App.css';
import Display from './Display'
import Button from './Button'

class Calculadora extends Component {
    state = {
        resutlado: 0,
    }
    cambioNumero = (valor) => {
        this.state.resutlado = valor;
    }
    render() {
        return (
            <div className="container border">
                <Display info={this.state.resutlado} />
                <div>
                    <div className="d-flex border">
                        <Button label="C" value="clear" type="op" /> acá quiero el onClick que lleve el value a la función cambio numero.
                    </div>
                    <div className="d-flex border">
                        <Button label="1" value="1" type="num" />
                        <Button label="2" value="2" type="num" />
                        <Button label="3" value="3" type="num" />
                        <Button label="+" value="+" type="op" />
                    </div>
                    <div className="d-flex border">
                        <Button label="4" value="4" type="num" />
                        <Button label="5" value="5" type="num" />
                        <Button label="6" value="6" type="num" />
                        <Button label="+" value="+" type="op" />
                    </div>

                    <div className="d-flex border">
                        <Button label="7" value="7" type="num" />
                        <Button label="8" value="8" type="num" />
                        <Button label="9" value="*" type="num" />
                        <Button label="/" value="/" type="op" />
                    </div>
                    <div className="d-flex border">
                        <Button label="0" value="0" type="num" />
                        <Button label="." value="." type="num" />
                        <Button label="*" value="*" type="op" />
                        <Button label="=" value="=" type="res" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Calculadora
