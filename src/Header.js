import {Link} from "react-router-dom";
function Header(){
    return(
        <>
        <div className="main">
            <div className="maintext">
                <div className="displaytitle">Little Lemon</div>
                <div className="subtitle">Chicago</div>
                <p>We are a family owned <br />
                    Mediterranean restaurant, <br />
                    focused on traditional <br />
                    recipes served with a modern <br />
                    twist.
                </p>
                <Link to="/Booking"><button className="btnReserveaTable" aria-label="On Click">Reserve a Table</button></Link>
            </div>
            <div className="mainImage">
                <img src="restauranfood.jpg" alt="restaurant food" />
            </div>
        </div>
        </>
    )
}

export default Header;