import { useCallback, useEffect, useState } from 'react'
import './Button.css'
function Button(props) {
  const [color, setColor] = useState("");

  const getApi = () => {
    fetch("https://69704cef78fec16a63fd511c.mockapi.io/fakePosts",{
      method : props.method
    })
    .then(async (data) =>{
      const d = await data.json();
      console.log(d);
    }).catch((error) =>{
      console.log(error);
    })
  }


  return (
    <button className={`button_hover ` + props.type} 
      onClick={getApi}
    >
      {props.children}
    </button>
  )
}

export default Button

