import {useState} from "react";

function BookingForm(){
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");
    const [availableTimes] = useState([
        {id: 1, time: "17:00" , available: true},
        {id: 2, time: "18:00" , available: true},
        {id: 3, time: "19:00" , available: true},
        {id: 4, time: "20:00" , available: true},
        {id: 5, time: "21:00" , available: true},
        {id: 6, time: "22:00" , available: true}
    ])

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
    }


    return(
<div>
    <form onSubmit={handleSubmit}>
        <fieldset>
            <div className="field">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <div className="field">
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)}>
                {availableTimes.map(f => <option key={f.id}>{f.time}</option>)}
          
            </select>
            </div>
            <div className="field">
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuest(e.target.value) }/>
            </div>
            <div className="field">
            <label htmlFor="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>Occasion</label>
            <select id="occasion">
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
            </div>
            <button type="submit" value="Make Your reservation"> Make Your reservation</button>
        </fieldset>
    </form>
</div>
    )
}

export default BookingForm;