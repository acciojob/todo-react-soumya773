import React from 'react'

const Todo = ({ todos, deleteTodo }) => {
  return (
    <div><ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul></div>
  )
}

export default Todo