import { useEffect, useState } from "react";
import Item from "./Item"

const ItemList = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(()=>{
        setTimeout(()=>{
            setUsuarios([
                {id: 1, nombre: "Lola", img: "http://placehold.it/100x100"},
                {id: 2, nombre: "Sofia", img: "http://placehold.it/100x100"},
                {id: 3, nombre: "Marina", img: "http://placehold.it/100x100"},

            ]);
        }, 2000);
    }, []);

    if (usuarios.length === 0){
        return <p>Loading...</p>;
    }
    else{
        return (
            <div className="App">
                <p>Bienvenidx a mi sitio!</p>
                {usuarios.map((e,i)=>{
                    return(
                        <>
                        <p key={e.id}>{e.nombre}</p>
                        <img key={e.id} alt='img' src={e.img}/>
                        </>
                    )
                })}
            </div>
        )
    }
    
}

export default ItemList
