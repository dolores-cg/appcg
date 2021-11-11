
import { useContext } from 'react'
import { contexto } from './CartContext'

const CartWidget = () => {

    const {cart} = useContext(contexto)
    

    return (
        <div>
            <span className="material-icons">
                shopping_cart
            </span>
        </div>
    )
}

export default CartWidget
