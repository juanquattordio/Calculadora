import React, { Component } from 'react';
import './App.css';
import Display from './Display'
import Button from './Button'
import ButtonBack from './ButtonBack'

class Calculadora extends Component {
    state = {
        display: "",
        num1: "",
        num2: "",
        operador: "",
        operador2: "",
        resultado: "",
        fullOperation: "",
    }
    cambioDisplay = (valor) => {
        this.setState({
            num1: this.state.num1 + valor,
            num2: this.state.num2 + valor,
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
        if (this.state.num1.indexOf(".") < 0) {
            this.setState({
                num1: this.state.num1 + valor,
                display: this.state.display + valor,
            })
        }
    }
    delete = () => {
        let newDisplay = this.state.display.slice(0, -1);
        this.setState({
            display: newDisplay,
        })
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
            resultado: "",
            fullOperation: "",
        })
    }
    sumar = () => {
        let resultadoParcial = eval(this.state.display)
        this.setState({
            display: this.state.display + "+",
            num1: resultadoParcial,
            num2: "",
            resultado: parseFloat(resultadoParcial),
            operador: "+",
        })
    }
    restar = () => {
        let resultadoParcial = eval(this.state.display)
        this.setState({
            display: this.state.display + "-",
            num1: resultadoParcial,
            num2: "",
            resultado: parseFloat(resultadoParcial),
            operador: "-",
        })
    }
    dividir = () => {
        let resultadoParcial = eval(this.state.display)
        this.setState({
            display: this.state.display + "/",
            num1: resultadoParcial,
            num2: this.state.num2 + "/",
            operador2: "/",
        })
    }
    multiplicar = () => {
        let resultadoParcial = eval(this.state.display)
        this.setState({
            display: this.state.display + "*",
            num1: resultadoParcial,
            num2: this.state.num2 + "*",
            operador2: "*",
        })
    }
    calcular = () => {
        let preResult = this.state.resultado;
        let fullOp = this.state.display;
        this.setState({
            fullOperation: fullOp,
            resultado: eval(this.state.display),
            display: preResult + this.state.operador + this.state.num2,
        })
    }

    render() {
        return (
            <div className="d-flex" >
                <div className="Calculadora d-flex">
                    <div>
                        <Display info={this.state} />
                    </div>
                    <div>
                        <div className="d-flex ">
                            <ButtonBack label="Delete" value="back" type="op" onClick={this.delete} />
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
            </div>
        );
    }
}
export default Calculadora
