import React from 'react'

const TodoItem = ({todo, onDel, onToggle}) => {
    const {id,text,done} = todo

    return (
      <div>
          <li className={done ? 'on' : ''}>
              <span onClick={() => onToggle(id)}>
                  {done}
              </span>
              <em onClick={() => onToggle(id)}>{text}</em>
              <button onClick={() => onDel(id)}>x</button>
          </li>
      </div>
    )
}

export default TodoItem