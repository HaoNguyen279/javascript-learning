import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '../src/components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <Button type ="success" method= "GET" >Get API</Button>
      <Button type ="danger" method = "POST">Post API</Button>
      <Button type ="primary" method = "POST">Primary button</Button>
    </>
  )
}

export default App
