function Footer(){
    return(
        <div>
           <div className="footerContainer">
                <div className="footerImage">
                    <img src="footer_logo.png" alt="Little Lemon's logo"/>
                </div>
                <div className="doormatNav">
                    <div>
                        <label>Doormat Navigation</label>
                    </div>
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Reservations</li>
                            <li>Order Online</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>    
                <div className="contact">
                    <label>Contact:</label>
                        <ul>
                            <li>Adress</li>
                            <li>Phone Number</li>
                            <li>E-mail</li>
                        </ul>
                </div>    
                <div className="socialMediaLinks">
                    <label>Social Media</label>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>Tiktok</li>
                        </ul>
                </div>    
            </div>
        </div>
    )
    }
    
    export default Footer;