import { useState } from "react";
export function Counter() {
    // estado do componente

    let [counter, setCounter] = useState(0)

    function Increments() {
        setCounter(counter + 1)
    }
    return (
        <div>
            <h1>Seu status é: {counter}</h1>
            <button onClick={Increments}>
                Increments
            </button>
        </div>
    );
}


