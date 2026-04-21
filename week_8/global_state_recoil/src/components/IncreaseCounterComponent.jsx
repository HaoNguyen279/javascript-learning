import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import counter from '../states/counterAtom'

export default function IncreaseCounterComponent() {
    const counterValue = useRecoilValue(counter);
    const [value, setValue] = useRecoilState(counter);
    function handleChange(){
        console.log("tang value");
        
        setValue(value + 1);
    }
  return (
    <div>
      <h1>{counterValue}</h1>
      <button onClick={handleChange}>Increase</button>
    </div>
  )
}
