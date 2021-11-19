import React, { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail';
import { useParams } from "react-router-dom"
import './styles/itemDetail.css'
import {firestore} from "./firebase"


const ItemDetailContainer = () => {

    const[item, setItem] = useState({});
    const {id} = useParams();


    useEffect(() => {

         //1) Necesito una referencia a la base de datos
         const db = firestore

         //2) Necesito una coleccion
         const collection = db.collection("productos")
 
         //3) Hago la consulta
         //const promesa = collection.get()
         const query = collection.doc(id)
 
         //4) Obtengo resultados
         const promesa = query.get()
 
         promesa
             .then((documento)=>{
                 console.log("Consulta exitosa")
                 const data = documento.data()
                 setItem(data)
             })
             .catch(()=>{
                 console.log("Hubo un error")
             })
 
     }, [id]);

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
