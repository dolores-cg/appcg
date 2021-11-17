import React from 'react'
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { contexto } from './CartContext';
import {useHistory} from 'react-router-dom' 

export const ItemDetail = ({ item }) => {

    const {push} = useHistory()
    const {addToCart} = useContext(contexto)

    const onAdd = (cantidad) => {
        addToCart(item, cantidad)
    }

    const redireccionar = () => {
        push ("/cart")
    } 
    
    return (
        <div className="row justify-content-center">
            <div className="m-3">
                
                { item.loading && <p>Loading...</p> }

                { !item.loading &&
                    <div >
                        <div >
                            <img src= {item.data.img} alt={item.data.description} />
                            <div>
                               <h5 >{ item.data.name }</h5>
                                <p >{ item.data.description }</p>
                                <p >$ { item.data.price }</p>
                                <ItemCount onAdd={onAdd}/>
                                {<button onClick={redireccionar}>ver carrito</button>}
                                
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
