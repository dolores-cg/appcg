//1) variable React en scope
import React from "react"

//2) variable ReactDOM en scope
import ReactDOM from "react-dom"

//3) creo un elemento
const Elemento = () => <p>Hola Mundo</p>

//4) renderizo el elemento
ReactDOM.render(<Elemento/> , document.getElementById("root"))