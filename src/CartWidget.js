
import { useContext } from 'react'
import { contexto } from './CartContext'

const CartWidget = () => {

    const {cart} = useContext(contexto)
    const totalItems = cart.reduce((total, item) => total + item.counter, 0);
    

    return (
        <div>
            <span className="material-icons">
                shopping_cart
            </span>
            {totalItems !== 0 && (
				<sup>
					{totalItems}
				</sup>
			)}
        </div>
    )
}

export default CartWidget
