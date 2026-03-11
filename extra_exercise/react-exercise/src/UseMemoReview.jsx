import React, { useCallback, useMemo, useState, memo, useEffect } from 'react'
import './App.css'


const Item = memo( ({name}) => {
  console.log('Render Item: ', name);
  return <div className='item'>{name}</div>
});

const ListItem = memo( ({data}) => {
  return data.map(item => <Item key={item.id} name={item.name} />)
});

function UseMemoReview() {
  const [count, setCount] = useState(0);
  
  const [data, setData] = useState([ // mặc định 3 item
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'},
  ]);
  const handleClick = useCallback(() => {
    setData(prevData => [...prevData, {id: prevData.length + 1, name: `Item ${prevData.length + 1}`}]);
    
  }, []);
  useEffect(() => {
    console.log('%cGiải thích: memo là HOC(high-order-component) dùng để ghi nhớ lại comopnent, nó chỉ render lại khi props truyền vào nó thay đổi, ở VD này là name của item, nó ko chặn component cha re render mà nó chỉ ko render bản thân nó', "color: orange; font-weight: bold;");
    console.log('%cTrong ví dụ Todo List này, khi add 1 item mới, nếu ko dùng memo thì các item cũ trong list sẽ bị re render => dùng memo vào các Item => các Item ko thay đổi sẽ ko bị re render', "color: yellow; font-weight: bold;");
    console.log('%cỞ đây, khi tăng count thì component cha sẽ re render, nhưng các component con dùng memo sẽ không re render nếu props của chúng không thay đổi', "color: lime; font-weight: bold;");
  }, []);
  return (
    <>
    <div className='container'>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(c => c + 1)}>Tăng Count (Test Memo)</button>
      <ListItem data={data} />
      <button onClick={handleClick}>Add Item</button>
    </div>
    </>
  )
}

export default UseMemoReview
