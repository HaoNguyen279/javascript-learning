import React, { use } from 'react'
import './App.css'
import { useState } from 'react'




function UseStateReview() {
  const [count, setCount] = useState(0);
  console.log('re-render');
  useEffect(() => {
    console.log('%cGiải thích: useState là hook dùng để khai báo state trong functional component, khi state thay đổi thì component sẽ được render lại để cập nhật giao diện người dùng', "color: orange; font-weight: bold;");
  }, []);
  return (
    <>
      <div className='container'>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase count</button>
      </div>
    </>
  )
}

export default UseStateReview
