import React from 'react'
import { useRecoilValue } from 'recoil'
import todoAtom from '../states/totoAtom'

export default function TodoItem() {
    const todoValue = useRecoilValue(todoAtom);
  return (
    <div>
      <p>{todoValue}</p>
      <button>Toggle Complete</button>
      <button>Delete</button>
    </div>
  )
}
