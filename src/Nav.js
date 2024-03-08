import { Link } from "react-router-dom";
import Home from './Home';
import BookingPage from './BookingPage';
import About from './About';
import {Route, Routes} from 'react-router-dom';

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
    <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/about" element={<About />}></Route>
    </Routes>
    </>
    )
    }
    export default Nav;