import Header from './Header';

function Home(){
    return(
        <>
        <Header></Header>
        <div className="weekSpecials">
            <div>
                <h1>This Week Specials!</h1>
            </div>
            <div className="btnContainer">
                <button className="btnReserveaTable">Online Menu</button>
            </div>
        </div>
        <div id="wekkspecialoffers" className="weekspecialoffers">
                <div id="dishcard" className="dishcard">
                    <div className="dishImage">
                        <img src="greek salad.jpg" alt="special dish 1" width={80} height={80} />
                    </div>
                    <div className="dishName">
                        <span>Greek salad</span>
                        <span className="price">$12.99</span>
                    </div>
                    <div  className="offerInfo">
                    <p className="offerInfo">The famous greek salaad of crispy lettuce, peppers, olives and our
                        Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    </div>
                    <div className="orderDelivery">
                        <p>Order a delivery</p>
                        <div className="deliveryIcon">
                            <img src="delivery.png" alt="delivery icon" />
                        </div>
                    </div>
                </div>
                <div id="dishcard" className="dishcard">
                    <div className="dishImage">
                        <img src="bruschetta.jpg" alt="special dish 2"/>
                    </div>
                    <div className="dishName">
                        <span>Bruschetta</span>
                        <span className="price">$5.99</span>
                    </div>
                    <div  className="offerInfo">
                        <p className="offerInfo">Our Bruschetta is made from grilled bread that has been smeared
                            with garlic and seasoned with salt and olive oil.
                        </p>
                    </div>
                    <div className="orderDelivery">
                        <p>Order a delivery</p>
                        <div className="deliveryIcon">
                            <img src="delivery.png" alt="delivery icon" />
                        </div>
                    </div>
                </div>
                <div id="dishcard" className="dishcard">
                    <div className="dishImage">
                        <img src="lemon dessert.jpg" alt="special dish 3"/>
                    </div>
                    <div className="dishName">
                    <span>Lemon dessert</span>
                    <span className="price">$5.00</span>
                    </div>
                    <div  className="offerInfo">
                    <p>This comes straight from grandma's recipe book, every last ingredient
                        has been sourced and is as authentic as can be imagined.
                    </p>
                    </div>
                    <div className="orderDelivery">
                        <p>Order a delivery</p>
                        <div className="deliveryIcon">
                            <img src="delivery.png" alt="delivery icon" />
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Home;