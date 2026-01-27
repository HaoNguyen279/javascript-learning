import React from 'react'
import Button from './components/Button'
function Bai2() {
  return (
    <>  
      <Button type ="success" method= "GET" >Get API</Button>
      <Button type ="danger" method = "POST">Post API</Button>
      <Button type ="primary" method = "POST">Primary button</Button>
    </>
  )
}

export default Bai2