import { useState } from 'react'

type Todo = {
    id: number
    text: string
    completed: boolean
}

function TodoApp(){
    const [todos, setTodos] = useState<Todo[]>([])
    const [inputValue, setInputValue] = useState("")


    function addTodo(){
        if (inputValue.trim() === "") return
        const newTodo: Todo = { id: Date.now(), text: inputValue, completed: false }
        setTodos([...todos, newTodo])
        setInputValue("")
    }

    function removeTodo(id: number){
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos)
    }

    function toggleTodo(id: number){
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id){
                return { ...todo, completed: !todo.completed }
            } else {
                return todo
            }
        })
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>My To-Dos</h1>
            <input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            {todos.length === 0 && <p>No todos yet — add one above!</p>}
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span 
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => removeTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp