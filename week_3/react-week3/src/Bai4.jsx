import React, { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'


const TodoItem = React.memo(function TodoItem({ id, title, content, isDone, deleteFn, toggleTodoFn }) {
    console.log("Render Item:", title);
    const className = isDone ? "todo-item is-done" : "todo-item";
    return (
      <div className={className}>
        <h4>{title}</h4>
        <p>{content}</p>
        <button onClick={() => deleteFn(id)}>Delete</button>
        <button onClick={() => toggleTodoFn(id)}>Toggle</button>
      </div>
    );
  });

  // react memo phải nằm ngoài component cha mới có tác dụng

  const NewTodo = ({addTodo}) => {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);


    const handleAdd = useCallback(() =>{
      addTodo(inputRef1.current.value, inputRef2.current.value);
    }, [addTodo]);

    return (
      <div className="todo-item">
        <h4>add your todo</h4>
        <input type="text" name='todo' placeholder='Title' ref={inputRef1} />
        <input type="text" name='todo' placeholder='Content' ref={inputRef2} />
        <button onClick={ handleAdd}>Add</button>
      </div>
    )
  }
  const TodoList = React.memo(({ list, deleteFn, toggleTodoFn }) => {
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
  }); // cái này cũng phải use memo và đem ra ngoài 



function Bai4() {
  const [todos, setTodos] = useState([
    { id: Date.now(), title: "Title 111 ", content: "Content 1" , isDone: false},
    { id: Date.now() + 1, title: "Title 222222222", content: "Content 2" , isDone: false},
    { id: Date.now() + 2, title: "Title 333333333333333333", content: "Content 3" , isDone: false},
    { id: Date.now() + 3, title: "Title 4444444444444444444444444444", content: "Content 4" , isDone: false}
  ]);







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
  const addTodo = useCallback((title, content) =>{
    setTodos((prev) => [...prev, {
      id: Date.now(),
      title : title,
      content : content,
      isDone : false
    } ])
  }, []);


  return (
    <>
      <h2>Todo List</h2>
      <TodoList list={todos} deleteFn={deleteTodo} toggleTodoFn={toggle} />
      <NewTodo addTodo={addTodo} />
    </>
  );
}

export default Bai4
