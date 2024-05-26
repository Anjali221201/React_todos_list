import './App.css';
import Header from "./mycomponents/header";
import {Todos} from "./mycomponents/Todos";
import { Footer } from './mycomponents/Footer';
import { AddTodo } from './mycomponents/AddTodo';
import { useState,useEffect } from 'react';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// }from "react-router-dom";


function App() {
  let initTodo;
  if(  localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo= JSON.parse(localStorage.getItem("todos"));
  }
  {/*here we are creating todos object,ondelete method*/}
  const onDelete =(todo)=>{
  console.log("I am onDelete of todo",todo);
   //Deleting this way in react doenot work
   //let index = todos.indexOf(todo);
   //todos.splics(index,1); 
   setTodos(todos.filter((e)=>{
    return e!==todo;
   }));
  localStorage.setItem("todos",JSON.stringify(todos)); 
  }
  const addTodo =(title,desc)=>{
    console.log("I am adding this todo",title,desc)
    let sno;
    if(todos.length==0){
      sno=1;
    }
    else{
      sno= todos[todos.length-1].sno+1;
    }
    const myTodo ={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));  
  }, [todos])
  
  
  return (
    <> 
  <Header title="My Todos List" searchBar={false}/>
  <AddTodo addTodo={addTodo}/>
  <Todos Todos={todos} onDelete={onDelete}/>
  <Footer />
  </>
  );
}

export default App;
