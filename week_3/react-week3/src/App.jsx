import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Bai1  from './Bai1'
import  Bai2  from './Bai2'
import  Bai3  from './Bai3'
import  Bai4  from './Bai4'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  const [count, setCount] = useState()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bai1 />} />
          <Route path="/Bai2" element={<Bai2 />} />
          <Route path="/Bai3" element={<Bai3 />} />
          <Route path="/Bai4" element={<Bai4 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
