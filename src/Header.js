import { NavLink } from "react-router-dom"
import NavBar from "./NavBar"

const Header = () => {
    return (
        <header>
            <NavLink to="/" exact>
            <h1>Tienda CARP</h1>
            </NavLink>
            <NavBar/>
           
                 
        </header>
    )
}

export default Header