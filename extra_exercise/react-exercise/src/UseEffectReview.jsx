import React, { use, useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function UseEffectReview() {
  const [data, setData] = useState(0);

  useEffect(() => {
    // Cái này chạy mỗi khi data thay đổi
    console.log("run useEffect ~~~");
  }, [data]);

  useEffect(() => {
    // Cái này chạy 1 lần đầu
    console.log('%cGiải thích: useEffect là hook xử lí side effect ,vd như call API này,... code sẽ chạy khi cômponent render, hoặc depedency array thay đổi, có thể dùng chạy 1 lần duy nhất bằng cách cho [] rỗng', "color: orange; font-weight: bold;");
  }, []);
  return (
    <>
      <div className='container'>
        <h1>UseEffect Review Component</h1>
        <h4>Data: {data}</h4>
        <button onClick={() => setData(data+1)}>Update Data</button>
      </div>
    </>
  )
}

export default UseEffectReview
