function Main(){
    return(
    <div>
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
                <button className="btnReserveaTable">Reserve a Table</button>
            </div>
            <div className="mainImage">
                <img src="restauranfood.jpg" alt="restaurant food" />
            </div>
        </div>
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
        <div className="testimonials">
            <div>
                <h1>Testimonials</h1>
            </div>
            <div className="testimonialsBoxContainer">
                <div className="testimonialBox">
                    <div className="rating">
                        <p>4/5 Excelent!</p>
                    </div>
                    <div className="userProfile">
                        <div className="userProfilePic">
                            <img src="https://i.pravatar.cc/120?img=35" alt="Profile pic"></img>
                        </div>
                        <div className="userName">
                            <p>Yuriko H.</p>
                        </div>
                    </div>
                    <div className="reviewText">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="testimonialBox">
                    <div className="rating">
                            <p>5/5 Outstanding!</p>
                        </div>
                        <div className="userProfile">
                            <div className="userProfilePic">
                                <img src="https://i.pravatar.cc/120?img=26" alt="Profile pic"></img>
                            </div>
                            <div className="userName">
                                <p>Jayden J.</p>
                            </div>
                        </div>
                        <div className="reviewText">
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                </div>
                <div className="testimonialBox">
                    <div className="rating">
                            <p>4/5 Excelent!</p>
                        </div>
                        <div className="userProfile">
                            <div className="userProfilePic">
                                <img src="https://i.pravatar.cc/120?img=11" alt="Profile pic"></img>
                            </div>
                            <div className="userName">
                                <p>Peter M.</p>
                            </div>
                        </div>
                        <div className="reviewText">
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                </div>
                <div className="testimonialBox">
                    <div className="rating">
                            <p>5/5 Outstanding!</p>
                    </div>
                    <div className="userProfile">
                        <div className="userProfilePic">
                            <img src="https://i.pravatar.cc/120?img=52" alt="Profile pic"></img>
                        </div>
                        <div className="userName">
                            <p>Carl J.</p>
                        </div>
                    </div>
                    <div className="reviewText">
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="about">
            <div className="aboutText">
                <div className="displaytitle">Little Lemon</div>
                <div className="subtitle">Chicago</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="aboutImageContainer">
                <div className="aboutImage">
                    <img src="Mario and Adrian A.jpg" alt="restaurant food" />
                </div>
                <div className="aboutImage">
                    <img src="Mario and Adrian B.jpg" alt="restaurant food" />
                </div>
            </div>
        </div>
    </div>
    )
    }
    export default Main;