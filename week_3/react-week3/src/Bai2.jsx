import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Bai1() {

    const [time,setTime] = useState();

    useEffect(()=>{

        const timerId = setInterval(() =>{
            const now = new Date().toLocaleTimeString('en-GB', { hour12: false });
            setTime(now);
        }, 1000);

        return () =>{
            clearInterval(timerId);
        }
    },[] )
  return (
    <>
        <h1>Digital clock</h1>
        <h1>{time}</h1>
    </>
  )
}

export default Bai1
