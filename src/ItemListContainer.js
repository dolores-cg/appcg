import "./styles/itemListContainer.css"
import React, { useEffect,useState } from 'react';
import Products from "./products.json";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
  
    const getData = (data) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data) {
            resolve(data);
          } else {
            reject("Nada");
          }
        }, 2000);
      });
  
    useEffect(() => {
      getData(Products)
        .then((res) => setProductos(res))
        .catch((err) => console.log("Paciencia: " ,err));
    }, []);
  
    return (
      <>
        {productos.length
          ? productos.map((producto) => (
              <ItemList product={producto} key={producto.id} />
            ))
          : <p className="loading">"Paciencia, se está cargando"</p>} 
      </>
    );
  };

export default ItemListContainer
