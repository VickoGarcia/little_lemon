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
        <div>This Week Specials!</div>
        <div>
            <button className="btnReserveaTable">Online Menu</button>
        </div>
    </div>
    <div>
        <section id="section">
            <article id="article1">
                <div class="gift_box">
                    <img src="greek salad.jpg" alt="special dish 1" />
                </div>
                <h2>Greek salad</h2>
                <p>The famous greek salaad of crispy lettuce, peppers, olives and our
                    Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            </article>
            <article id="article2">
                <div>
                    <img src="bruschetta.jpg" alt="special dish 2"/>
                </div>
                <h2>Bruschetta</h2>
                <p>Our Bruschetta is made from grilled bread that has been smeared
                    with garlic and seasoned with salt and olive oil.
                </p>
            </article>
            <article id="article3">
                <div>
                    <img src="lemon dessert.jpg" alt="special dish 3"/>
                </div>
                <h2>Lemon dessert</h2>
                <p>This comes straight from grandma's recipe book, every last ingredient
                    has been sourced and is as authentic as can be imagined.
                </p>
            </article>
        </section>
    </div>
    </div>
    )
    }
    export default Main;