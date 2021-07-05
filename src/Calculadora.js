import { useState } from "react"
import Counter from "./Counter"
import './App.css';

function Calculadora() {
    let [initial, setInitial] = useState(0)

    function handleChange(e) {
        console.log(e.target.value)
        setInitial(e.target.value)
        console.log("Initial: " + initial)
    }

    return (
        <div>
            <div className="d-flex" id="display">
                <input type="number" value={initial} />
            </div>
            <div>
                <div className="d-flex">
                    <div className="button button-num">1</div>
                    <div className="button button-num">2</div>
                    <div className="button button-num">3</div>
                    <div className="button button-op">+</div>
                </div>
                <div className="d-flex">
                    <div className="button button-num">4</div>
                    <div className="button button-num">5</div>
                    <div className="button button-num">6</div>
                    <div className="button button-op">-</div>
                </div>
                <div className="d-flex">
                    <div className="button button-num">7</div>
                    <div className="button button-num">8</div>
                    <div className="button button-num">9</div>
                    <div className="button button-op">/</div>
                </div>
                <div className="d-flex">
                    <div className="button button-num">0</div>
                    <div className="button button-num">.</div>
                    <div className="button button-result">=</div>
                    <div className="button button-op">x</div>
                </div>
            </div>



            <form>
                <div>
                    <label>Valor inicial</label>
                    <input type="number" onInput={handleChange} value={initial} />
                </div>
                <div>
                    <label>Salto</label>
                    <input type="number" onInput={handleChange} value={initial} />
                </div>
                <div>
                    <label>Acepta negativo</label>
                    <input type="checkbox" onInput={handleChange} />
                </div>
            </form>

            <Counter initial={initial} />
        </div>
    )
}
export default Calculadora
