import React from 'react'
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { contexto } from './CartContext';

export const ItemDetail = ({ item }) => {

    const {addToCart} = useContext(contexto)

    const onAdd = (cantidad) => {
        console.log ("Seleccionaron la cantidad")
        console.log (cantidad, item)
        addToCart(item, cantidad)
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
                                
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
