import Home from './Home';
import BookingPage from './BookingPage';
import About from './About';
import {Route, Routes} from 'react-router-dom';
import {useState, useReducer} from "react";



function Main(){

    const [availableTimes, setAvailableTimes] = useState([
        {id: 1, time: "17:00" , available: true},
        {id: 2, time: "18:00" , available: true},
        {id: 3, time: "19:00" , available: true},
        {id: 4, time: "20:00" , available: true},
        {id: 5, time: "21:00" , available: true},
        {id: 6, time: "22:00" , available: true}
    ])

    function updateTimes(){
       
    }

    function initializeTimes(){
        setAvailableTimes([
            {id: 1, time: "17:00" , available: true},
            {id: 2, time: "18:00" , available: true},
            {id: 3, time: "19:00" , available: true},
            {id: 4, time: "20:00" , available: true},
            {id: 5, time: "21:00" , available: true},
            {id: 6, time: "22:00" , available: true}
        ])
        return({availableTimes})
    }

    const reducer = (state, action) => {

    }
    return(
    <div>
        <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes}/>}></Route>
        <Route path="/about" element={<About />}></Route>
    </Routes>
    </div>
    )
    }
    export default Main;