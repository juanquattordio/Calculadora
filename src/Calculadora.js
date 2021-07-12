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
    ultimoChar = () => {
        let lastChar = this.state.display.slice(-1);
        console.log(lastChar);
        if (lastChar === "*" || lastChar === "/" || !isNaN(lastChar)) {
            console.log("Es un numero");
        } else console.log("No es un numero");
    }
    cambioDisplay = (valor) => {
        this.setState({
            num1: this.state.num1 + valor,
            num2: this.state.num2 + valor,
            display: this.state.display + valor,
            fullOperation: this.state.fullOperation + valor,
        })

    }
    agregarCero = (valor) => {
        // si no hay cero en la pantalla, puede agregarlo
        if (this.state.display !== "") {
            this.setState({
                display: this.state.display + valor,
                fullOperation: this.state.fullOperation + valor,
            })
        }
    }
    agregarDecimal = (valor) => {
        // si no existe decimal en la pantalla, puede agregarlo
        if (this.state.num1.indexOf(".") < 0) {
            this.setState({
                num1: this.state.num1 + valor,
                display: this.state.display + valor,
                fullOperation: this.state.fullOperation + valor,
            })
        }
    }
    delete = () => {
        if (this.state.operador2 !== "=") {
            let lastChar = this.state.display.slice(-1);
            if (lastChar === "*" || lastChar === "/" || !isNaN(lastChar)) {
                let newDisplay = this.state.display.slice(0, -1);
                let newFullOperation = this.state.fullOperation.slice(0, -1);
                let newNum2 = this.state.num2.slice(0, -1);
                this.setState({
                    display: newDisplay,
                    num2: newNum2,
                    fullOperation: newFullOperation,
                })
            }
        }
    }
    clearDisplay = () => {
        this.setState({
            display: this.state.resultado,
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
            fullOperation: this.state.fullOperation + "+",
            num1: resultadoParcial,
            num2: "",
            resultado: parseFloat(resultadoParcial),
            operador: "+",
            operador2: "",
        })
    }
    restar = () => {
        let resultadoParcial = eval(this.state.display)
        this.setState({
            display: this.state.display + "-",
            fullOperation: this.state.fullOperation + "-",
            num1: resultadoParcial,
            num2: "",
            resultado: parseFloat(resultadoParcial),
            operador: "-",
            operador2: "",
        })
    }
    dividir = () => {
        let resultadoParcial = eval(this.state.display)
        this.setState({
            display: this.state.display + "/",
            fullOperation: this.state.fullOperation + "/",
            num1: resultadoParcial,
            num2: this.state.num2 + "/",
            operador2: "/",
        })
    }
    multiplicar = () => {
        let resultadoParcial = eval(this.state.display)
        this.setState({
            display: this.state.display + "*",
            fullOperation: this.state.fullOperation + "*",
            num1: resultadoParcial,
            num2: this.state.num2 + "*",
            operador2: "*",
        })
    }
    calcular = () => {
        if (this.state.display !== "") {
            let continuar = true;
            if (this.state.display.length > 1) {
                let lastChar2 = this.state.display.slice(-2);
                if (lastChar2 === "/0") {
                    alert("#¡DIV/0!");
                    this.setState({ operador2: "" });
                    continuar = false;
                }
            }
            if (this.state.operador2 !== "=" && continuar === true) {
                let lastChar = this.state.display.slice(-1);
                console.log(!isNaN(lastChar) + "Es un numero");
                if (isNaN(lastChar)) {
                    let newFullOperation = this.state.fullOperation.slice(0, -1);
                    let fullOp = "(" + newFullOperation + ")";
                    this.setState({
                        fullOperation: fullOp,
                        resultado: eval(fullOp),
                        display: eval(fullOp),//preResult + this.state.operador + this.state.num2,
                        operador2: "=",
                    })
                } else {
                    let fullOp = "(" + this.state.fullOperation + ")";
                    this.setState({
                        fullOperation: fullOp,
                        resultado: eval(fullOp),
                        display: eval(fullOp),//preResult + this.state.operador + this.state.num2,
                        operador2: "=",
                    })
                }
            }
        };
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
