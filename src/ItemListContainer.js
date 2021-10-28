import ItemList from "./ItemList"

const ItemListContainer = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.msj}</h1>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer
