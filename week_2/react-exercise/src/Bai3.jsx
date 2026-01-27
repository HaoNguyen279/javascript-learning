import React from 'react'
import { useState } from 'react'
import AlertComponent from './components/AlertComponent'
function Bai3() {
    const [color, setColor] = useState("red");
  return (
    <>  
    <AlertComponent color={color} />
    <button  onClick={() => setColor("success")}>Set success</button>
    <button onClick={() => setColor("danger")}>Set danger</button>
    <button  onClick={() => setColor("primary")}>Set primary</button>
    </>
  )
}

export default Bai3