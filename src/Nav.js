import { Link } from "react-router-dom";


function Nav(){
    return(<>
    <nav className="NavBar">
        <ul>
            <li><img src="Logo.png" width="360px" height="120px" alt="Little Lemon's Logo"/></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>Menu</li>
            <li><Link to="/booking">Reservations</Link></li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </nav>
    
    </>
    )
    }
    export default Nav;