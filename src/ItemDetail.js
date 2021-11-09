import React from 'react'
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom'

export const ItemDetail = ({ item }) => {


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
                                <ItemCount/>
                                <Link to="/cart">
                                    <button>Confirmar compra</button>    
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
