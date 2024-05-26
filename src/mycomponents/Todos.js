import React from 'react'
import {TodoItem} from "./TodoItem";

{/*if we are writing props here then we have to take props.element everywhere and if we are writing element directly then we don't have to write props.element anywhere*/}
export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='my-3'>Todos List</h3>
      {props.Todos.length===0?"No Todos to display":
      props.Todos.map((Todos)=>{
      return <TodoItem todo={Todos} key={Todos.sno}onDelete={props.onDelete}/>
      })
      }
    </div>
  )
}
