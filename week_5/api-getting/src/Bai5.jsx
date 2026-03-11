import { useEffect, useRef, useState } from "react";
import "./Bai5.css";

const TodoItem = ({ title, completed, onToggleCompleted, onDelete }) => {
    return (
        <div className={`todo-item ${completed ? "is-completed" : ""}`}>
            <p className="todo-title">{title}</p>

            <div className="todo-actions">
                <button
                    className={`todo-btn ${completed ? "btn-undo" : "btn-complete"}`}
                    onClick={onToggleCompleted}
                >
                    {completed ? "Undo" : "Done"}
                </button>
                <button className="todo-btn btn-delete" onClick={onDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default function Bai5() {
    const baseUrl = "https://69704cef78fec16a63fd511c.mockapi.io/";
    const [todos, setTodos] = useState([]);
    const inpRef = useRef(null);
    const handleRemoveTodo = (id) =>{
        const response = fetch(baseUrl + `todos/${id}`, {
            method: "DELETE",
        });
        response.then( (data) => {console.log(data); fetchTodoList();});
    }
    const handleCompleteTodo = (id) =>{
        if(todos.find((item) => item.id === id).completed){
            const response = fetch(baseUrl + `todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                completed: false,
            })
        });
        
        response.then( (data) => {console.log(data); fetchTodoList();});
        }else{
            const response = fetch(baseUrl + `todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                completed: true,
            })
        });
        response.then( (data) => {console.log(data); fetchTodoList();});
        }

    }

    const handleCreateNewTodo = () =>{
        const data = inpRef.current.value;
        const response = fetch(baseUrl + `todos`, {
            method: "POST",
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({
                title : data,
                completed : false,
                createdAt : Date.now()
            })
        });
        response.then( (data) => {console.log(data); fetchTodoList();});
    }
    async function fetchTodoList() {
        try {
            const response = await fetch(baseUrl + "todos");
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        fetchTodoList();
    }, [todos]);
    return (
        <div >
            <h1>Todo List (mockapi.io)</h1>

            <div className="todo-list">
                {todos.map((item) => (
                    <TodoItem
                        key={item.id}
                        title={item.title}
                        completed={item.completed}
                        onToggleCompleted={() => handleCompleteTodo(item.id)}
                        onDelete={() => handleRemoveTodo(item.id)}
                    />
                ))}
            </div>

            <div>
                <p>New todo</p>
                <input type="text" ref={inpRef} />
                <button onClick={() => handleCreateNewTodo()}>Create new todo</button>
            </div>
        </div>
    );
}