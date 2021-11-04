import React, { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail';
import './styles/itemDetail.css'


const itemToDetail = {
        id: '1',
        name: 'Camiseta ',
        description: 'Equipo: River',
        price: 7500,
        img: "https://www.digitalsport.com.ar/files/products/5d2cbd5d7c02c-479340-1200x1200.jpg"     
}

const itemToDetailPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(itemToDetail);
    }, 2000);
});

const ItemDetailContainer = () => {

    const[item, setItem] = useState({
        data: {},
        loading: true
    });

    useEffect( () => {
        itemToDetailPromise.then( data => {
            setItem({
                data: data,
                loading: false
            });
        });
    }, []);

    return (
        <div>
            <div className= "itemDetail">
                <h1>Detalle</h1>
                <ItemDetail item = { item } />
            </div>
        </div>
    );
}

export default ItemDetailContainer
