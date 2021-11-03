import {Link} from 'react-router-dom'

import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav>
            <CartWidget/>
                <Link to="/categoria/1">categoria 1</Link>
                <Link to="/categoria/2">categoria 2</Link>
        </nav>
    )
}

export default NavBar
