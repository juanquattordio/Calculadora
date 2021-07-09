import React, { Component } from 'react';
import './App.css';
import Display from './Display'
import Button from './Button'

class Calculadora extends Component {
    state = {
        display: "",
        num1: "",
        num2: "",
        operador: "",
    }
    cambioDisplay = (valor) => {
        this.setState({
            display: this.state.display + valor,
        })
    }
    agregarCero = (valor) => {
        // si no hay cero en la pantalla, puede agregarlo
        if (this.state.display !== "") {
            this.setState({
                display: this.state.display + valor,
            })
        }
    }
    agregarDecimal = (valor) => {
        // si no existe decimal en la pantalla, puede agregarlo
        if (this.state.display.indexOf(".") < 0) {
            this.setState({
                display: this.state.display + valor,
            })
        }
    }
    clearDisplay = () => {
        this.setState({
            display: "",
        })
    }
    clearAll = () => {
        this.setState({
            display: "",
            num1: "",
            num2: "",
            operador: "",
        })
    }
    sumar = () => {
        this.setState({
            num1: this.state.display,
            display: "",
            operador: "sumar",
        })
    }
    restar = () => {
        this.setState({
            num1: this.state.display,
            display: "",
            operador: "restar",
        })
    }
    dividir = () => {
        this.setState({
            num1: this.state.display,
            display: "",
            operador: "dividir",
        })
    }
    multiplicar = () => {
        this.setState({
            num1: this.state.display,
            display: "",
            operador: "multiplicar",
        })
    }
    calcular = () => {
        this.state.num2 = this.state.display;
        switch (this.state.operador) {
            case "sumar": {
                this.setState({
                    display: parseFloat(this.state.num1) + parseFloat(this.state.num2),
                }); break;
            }
            case "restar": {
                this.setState({
                    display: parseFloat(this.state.num1) - parseFloat(this.state.num2),
                }); break;
            }
            case "dividir": {
                this.setState({
                    display: parseFloat(this.state.num1) / parseFloat(this.state.num2),
                }); break;
            }
            default: {
                this.setState({
                    display: parseFloat(this.state.num1) * parseFloat(this.state.num2),
                }); break;
            }
        }

    }
    render() {
        return (
            <div className="Calculadora">
                <div>
                    <Display info={this.state.display} />
                </div>
                <div>
                    <div className="d-flex ">
                        <Button label="C" value="clear" type="op" onClick={this.clearDisplay} />
                        <Button label="AC" value="clear" type="op" onClick={this.clearAll} />
                    </div>

                    <div className="d-flex ">
                        <Button label="1" type="num" onClick={this.cambioDisplay} />
                        <Button label="2" type="num" onClick={this.cambioDisplay} />
                        <Button label="3" type="num" onClick={this.cambioDisplay} />
                        <Button label="+" type="op" onClick={this.sumar} />
                    </div>
                    <div className="d-flex ">
                        <Button label="4" type="num" onClick={this.cambioDisplay} />
                        <Button label="5" type="num" onClick={this.cambioDisplay} />
                        <Button label="6" type="num" onClick={this.cambioDisplay} />
                        <Button label="-" type="op" onClick={this.restar} />
                    </div>
                    <div className="d-flex ">
                        <Button label="7" type="num" onClick={this.cambioDisplay} />
                        <Button label="8" type="num" onClick={this.cambioDisplay} />
                        <Button label="9" type="num" onClick={this.cambioDisplay} />
                        <Button label="*" type="op" onClick={this.multiplicar} />
                    </div>
                    <div className="d-flex ">
                        <Button label="." type="num" onClick={this.agregarDecimal} />
                        <Button label="0" type="num" onClick={this.agregarCero} />
                        <Button label="=" type="res" onClick={this.calcular} />
                        <Button label="/" type="op" onClick={this.dividir} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Calculadora
