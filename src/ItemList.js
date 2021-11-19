import './styles/itemList.css'
import {Link} from 'react-router-dom'

 

const ItemList = ({ product }) => {
  return (
   
        <div className="card">
            <h3>{product.name}</h3>
            <span>${product.price}</span>
            <Link to="/item/:id">Ver producto</Link>
        </div>
    
  );
};

export default ItemList
