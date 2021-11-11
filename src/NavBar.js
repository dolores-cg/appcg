import {Link} from 'react-router-dom'
import { contexto } from './CartContext'
import './styles/NavBar.css'
import CartWidget from "./CartWidget"

const NavBar = () => {
    
    return (
        <nav>
            <nav className="NavBar">
            <ul className="navBarLista">
                <Link to="/categoria/1" className="navBarItems">Indumentaria</Link>
                <Link to="/categoria/2" className="navBarItems">Accesorios</Link>
                <CartWidget/>
            </ul>
            </nav>
        </nav>
    )
}

export default NavBar
