import React from 'react'
{/*like here we have written directly the element so we can use element name directly in the whole program*/}
export const TodoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
{/*using a arrow function to just pass the todo function instead of calling it*/}
</div>
  )
}
