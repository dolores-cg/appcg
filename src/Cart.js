import './styles/Cart.scss';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { contexto } from './CartContext'


function Cart({ item }) {
	const { removeItem } = useContext(contexto);
	return (
		<article key={item.id} className='cartDetail-card'>
			<div className='cardImg-Title'>
				<div className='card-img-container'>
					<img
						className='img-primary'
						src={item.img}
						alt={item.name}
					/>
				</div>
				<h2 className='info-title ms-3'>{item.name}</h2>
				<h2 className='ms-6'>Stock: {item.stock}</h2>
			</div>

			<div className='price-container'>
				<div>
					<span className='item-price'>
						${item.price * (1 - item.discount / 100)}
					</span>
					<ItemCount
						initial={item.counter}
						item={item}
						showBtn={false}
					/>
					<span className='item-price'>x{item.counter} </span>
					<span className='item-price'>
						${item.price * (1 - item.discount / 100) * item.counter}
					</span>
				</div>

				<div
					onClick={() => removeItem(item.id)}
					className='close'
					to='/shop'
				>
					<i className='icon-icon-cross'></i>
				</div>
			</div>
		</article>
	);
}

export default Cart;