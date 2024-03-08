import BookingForm from "./BookingForm"

function BookingPage(props){
    return(
    <div className="bookingPage">
        <div className="main">
            <div className="maintext">
                <div className="displaytitle">Little Lemon</div>
                <div className="subtitle">Chicago</div>
                <p>We at Little Lemon understad your time is gold! Having a fun and delightful time
                    with your family & friends at our restaurants enjoying delicious food is our priority,
                    delivered or in person our food will always be made with love for You! Ready to visit us?
                    Reserve a table online and tell us when would you like to come!
                </p>
            </div>
            <div className="mainImage">
                <img src="tablereservation.jpg" alt="tables" />
            </div>
        </div>
        <BookingForm availableTimes={props.availableTimes}/>
    </div>
    )
}

export default BookingPage;