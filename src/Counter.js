import { useState, useEffect } from "react"

function Counter(props) {
    let [count, setCount] = useState(props.initial || 0);

    // es una funcion que se ejecuta en un componente para ejecutar un callback solamente cuando dicho componente se renderiza. 
    //actualizar el estado del Counter cada vez que cambia su state.
    //cada vez que modifico el state el componente se renderiza.
    // Ver como funciona el useEffect, ver comienzo de clase del 23/06.
    // encapsula un comportamiento que 
    useEffect(() => {
        setCount(props.initial)
    }, [props])

    function increment() {
        setCount(count + props.step)
    }
    function reset() {
        setCount(0)
    }
    function decrement() {
        let x = count - props.step
        if (props.negative === false && x < 0) return
        setCount(x)
        // o es igual a hacer esto: 
        //if ((props.negative === false && (count - step) >= 0) || props.negative === true) {
        //     setCount(count - step)
        // }
    }
    return (
        <div>
            <p> {count} </p>
            <button onClick={increment}>Incrementar</button>
            <button onClick={reset}>Resetear</button>
            <button onClick={decrement}>Decrementar</button>

        </div>
    )
}
Counter.defaultProps = {
    step: 2
}

export default Counter