import React, { useCallback, useRef, useState } from 'react'
import './App.css'


function UseRefReview() {
  
  const ref = useRef(null);
  const [data, setData] = useState(''); 
  const handleClick = useCallback(() => {
    setData(ref.current.value);
    console.log('%cGiải thích: useRef dùng để thao tác trực tiếp với DOM mà không cần phải render lại component, ví dụ, gán ref vào thẻ input để lấy value user nhập dô, sau đó hiển thị test', "color: cyan; font-weight: bold;");
  }, []);
  return (
    <>
      <div className='container'>
        <input type="text" ref={ref} />
        <button onClick={handleClick}>Set Data</button>
        <h1>{data}</h1>
      </div>
    </>
  )
}

export default UseRefReview
