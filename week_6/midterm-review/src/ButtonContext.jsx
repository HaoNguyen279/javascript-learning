


import { useContext} from "react";
import {CounterContext} from "./CounterContext";

export default function ButtonContext(){
    const { count, increment , decrement, reset} = useContext(CounterContext);
    return(
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}