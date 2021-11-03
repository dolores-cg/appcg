import { BrowserRouter,Route } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import Footer from "./Footer"

const App = () => {
   
    return (
    <BrowserRouter>
    <div className="container">
        <Header/>
        <Route path= "/" component={ItemListContainer} exact/>
        <Route path="/categoria/:id" component={ItemListContainer}/>
        <Footer/>
    </div>
    </BrowserRouter>
    )    
}

export default App
