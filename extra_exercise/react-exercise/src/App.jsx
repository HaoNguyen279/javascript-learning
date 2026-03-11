import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseRefReview from './UseRefReview'
import UseMemoReview from './UseMemoReview'
import UseStateReview from './UseStateReview'
import UseEffectReview from './UseEffectReview'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/useref' element={<UseRefReview />} />
        <Route path='/usememo' element={<UseMemoReview />} />
        <Route path='/usestate' element={<UseStateReview />} />
        <Route path='/useeffect' element={<UseEffectReview />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
