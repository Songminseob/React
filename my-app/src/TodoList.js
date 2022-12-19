import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todo, onDel, onToggle}) => {
    return (
      <ul className='TodoList'>
          {
              todo.map(todo => <TodoItem key={todo.id}
              todo={todo} onDel={onDel} onToggle={onToggle}/>)
          }
      </ul>
    )
}

export default TodoList