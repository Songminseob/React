import React, {useRef, useState} from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const Todo = () => {
    const no = useRef(1)

    const [todo, setTodo] = useState([])

    const onAdd = (text) => {
        setTodo([
          ...todo,
            {
                id: no.current++,
                text: text,
                done: false
            }
        ])
    }

    const onDel = (id) => {
        setTodo(todo.filter(todo => todo.id !== id))
    }

    const onToggle = (id) => {
        setTodo(todo.map(todo => todo.id === id ? { ...todo, done: !todo.done} : todo))
    }

    return (
      <div className='Todo'>
          <h1>투두리스트</h1>
          <TodoInput onAdd={onAdd}/>
          <TodoList todo={todo} onDel={onDel} onToggle={onToggle}/>
      </div>
    );
}

export default Todo;