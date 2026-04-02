
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import {CounterProvider, CounterContext} from "./CounterContext";
import ButtonContext from "./ButtonContext";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';
// export default function CounterDemo(){
//     const { count, increment , decrement, reset} = useContext(CounterContext);
//     return(
//         <div>
//             <p>Count: {count}</p>
//             <ButtonContext />
//         </div>
//     )
// }

export default function CounterDemo(){
    const count = useSelector((state) => state.counter.value );
    const dispatch = useDispatch();
    return(
    <div>
        <h1>Redux Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>Tăng</button>
        <button onClick={() => dispatch(decrement())}>Giảm</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
    )
}