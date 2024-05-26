import React from 'react'
// import './footer.css'
export const Footer = () => {
  let footerstyle={
    position:"sticky",
    top:"100vh",
    width:"100%",
    border:"2px solid blue",
    color:"black",
  }
  return (
    <footer className="bg-dark text-light py-3"style={footerstyle}>
      <p className="text-center">
      Copyright &copy; MyTodosList.com
      </p></footer>
  )
}
