import ItemCount from "./ItemCount"
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import Footer from "./Footer"

const App = () => {
   
    return (
    <>
    <div className="container">
        <Header/>
        <ItemListContainer msj="Bienvenidx a mi sitio!"/>
        <ItemCount/>
        <Footer/>
    </div>
    </>
    )    
}

export default App
