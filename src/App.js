
import { BrowserRouter,Route } from "react-router-dom"
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import CustomComponent from "./CartContext"


const App = () => {
   
    return (
    <BrowserRouter>
        <CustomComponent>
        <Header/>
        <Route path= "/" component={ItemListContainer} exact/>
        <Route path="/categoria/:id" component={ItemListContainer}/>
        <Route path= "/item/:id" component={ItemDetailContainer}/>
        <Route path= "/cart" component={ItemDetailContainer}/>
        </CustomComponent>
        </BrowserRouter>
    )    
}

export default App
