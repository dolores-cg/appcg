import "./styles/itemListContainer.css"
import React, { useEffect,useState } from 'react';
import { useParams } from "react-router-dom"
import Products from "./products.json";
import ItemList from "./ItemList";
import { firestore } from "./firebase"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {id} = useParams()
  
   /* const getData = (data) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data) {
            resolve(data);
          } else {
            reject("Nada");
          }
        }, 2000);
      });*/
  
    useEffect(() => {
         //1) Necesitas la db
         const db = firestore

         //2) Necesito una coleccion
         const collection = db.collection("productos")
 
         //3) Hago la consulta
         //const promesa = collection.get()
         let query = collection.where("idCategoria","==",id)
 
         query = query.where("precio",">",50)
 
         const consulta = query.get()

         
        //4) Obtengo resultados
        consulta
        .then(resultado => { 
          setProductos(resultado.docs.map(doc=>({...doc.data(),id:doc.id})))

      })
      .catch(error => {
          console.log(error)
      })
})
  return (
  <div id="catalogo-pagina">
      <ItemList productos={productos}/>
  </div>
)
      /*getData(Products)
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
    );*/
  };

export default ItemListContainer
