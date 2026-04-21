import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import counter from '../states/counterAtom'

export default function DecreaseCounterComponent() {
    const counterValue = useRecoilValue(counter);
    const [value, setValue] = useRecoilState(counter);
    function handleChange (){
        console.log("giam value");
        setValue(value - 1);
    }
  return (
    <div>
        <h1>{counterValue}</h1>
        <button onClick={handleChange}>Decrease</button>
    </div>
  )
}
