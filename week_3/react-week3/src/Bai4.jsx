import React, { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function Bai4() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Title 1", content: "Content 1" , isDone: false},
    { id: 2, title: "Title 2", content: "Content 2" , isDone: false},
    { id: 3, title: "Title 3", content: "Content 3" , isDone: true},
    { id: 4, title: "Title 4", content: "Content 4" , isDone: true}
  ]);

  const TodoItem = React.memo(({ id, title, content, isDone, deleteFn, toggleTodoFn }) => {
    console.log("Render Item:", title);
    const [className, setClassName] = useState("");
    useEffect(() =>{
      if(isDone) setClassName("todo-item is-done")
      else setClassName("todo-item")
    },[className]);
    return (
      <div className={className}>
        <h4>{title}</h4>
        <p>{content}</p>
        <button onClick={() => deleteFn(id)}>Delete</button>
        <button onClick={() => toggleTodoFn(id)}>Toggle</button>
      </div>
    );
  });

  const TodoList = ({ list, deleteFn, toggleTodoFn }) => {
    return (
      <div>
        {list.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            isDone={item.isDone}
            deleteFn={deleteFn}
            toggleTodoFn={toggleTodoFn}
          />
        ))}
      </div>
    );
  };

  const NewTodo = () => {
    const [newTodo, setNewTodo] = useState();
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const newArr = [...todos];
    newArr.reverse();
    const handleAdd = useCallback(() =>{
    setTodos([...todos, {
      id : newArr[0].id + 1,
      title : inputRef1.current.value,
      content : inputRef2.current.value,
      isDone : false
    }] // spread operation cua Array
  )

  },[]);
    return (
      <div className="todo-item">
        <h4>add your todo</h4>
        <input type="text" name='todo' placeholder='Title' ref={inputRef1} />
        <input type="text" name='todo' placeholder='Content' ref={inputRef2} />
        <button onClick={ handleAdd}>Add</button>
      </div>
    )
  }

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const toggle = useCallback((id) =>{
    setTodos((prev)=>{
      return prev.map((item) =>{
        if(item.id == id){
          return {...item, isDone : !item.isDone}
        }
        return item;
      })
    })
  },[]);


  return (
    <>
      <h2>Todo List</h2>
      <TodoList list={todos} deleteFn={deleteTodo} toggleTodoFn={toggle} />
      <NewTodo/>
    </>
  );
}

export default Bai4
