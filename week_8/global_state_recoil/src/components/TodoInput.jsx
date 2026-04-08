import React, { useRef } from 'react'
import { useRecoilState } from 'recoil'
import todoAtom from '../states/totoAtom'

export default function TodoInput() {
    const [todo, setTodo] = useRecoilState(todoAtom);
    const inpRef = useRef(null);
    const handleAdd = ()=>{
        setTodo([...todo, {todoId : Date.now(), todoContent: inpRef.current.value} ])
    }
  return (
    <div>
      <input type="text"ref={inpRef}/>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}
