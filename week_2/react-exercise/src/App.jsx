import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // <== thiếu import
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bai3 from './Bai3'
import Bai2 from './Bai2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bai2 />} />
        <Route path="/bai3" element={<Bai3 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App