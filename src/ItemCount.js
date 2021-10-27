import {useState} from "react"

const ItemCount = () => {

    const [contador,setContador] = useState(0)
    const sumar = () => {
        setContador(contador+1)
    }
    const restar = () => {
        setContador(contador-1)
        
    }
    if (contador < 0){
         setContador(contador>=0)   
    }
    return (
        <>
        <p>Agrega el producto al carrito :D</p>
        <button onClick={restar}>-</button>  
        <p>{contador}</p>
        <button onClick={sumar}>+</button>  
        </>
    )
}

export default ItemCount
