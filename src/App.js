import { BrowserRouter,Route } from "react-router-dom"
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"

const App = () => {
   
    return (
    <BrowserRouter>
    <div className="container">
        <Header/>
        <Route path= "/" component={ItemListContainer} exact/>
        <Route path="/categoria/:id" component={ItemListContainer}/>
        <Route path= "/item/:id" component={ItemDetailContainer}/>
        <Route path= "/cart" component={ItemDetailContainer}/>
        </div>
    </BrowserRouter>
    )    
}

export default App
