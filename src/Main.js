import Home from './Home';
import BookingPage from './BookingPage';
import About from './About';
import Confirmation from './Confirmation';
import {Route, Routes,  useNavigate} from 'react-router-dom';
import {useReducer} from "react";
import React from 'react';

const seededGenerator = (date, hour) => {
    const m = 9;
    const d = date.getDate();
    const result = ((d + hour) % m ) / 10;
  
    return result;
  }
  
  const fetchAPI = (date) => {
    let result = [];
  
    result.push("--- Select a Time ---")
  
    for (let hour = 15; hour <= 23; hour++) {
      if(seededGenerator(date, hour) < 0.5) result.push(hour + ':00');
      if(seededGenerator(date, hour + 7) < 0.5) result.push(hour + ':30');
    }
  
    return result;
  };
  
  const submitAPI = formData => true;
  
  const fakeAPI = {
    fetchAPI: fetchAPI,
    submitAPI: submitAPI,
  }
  
  export{fakeAPI};

 
function Main(){


    /* const seedRandom = function(seed){
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function(){
            return ( s = s * a % m) / m;
        }
    }

    const fetchAPI = function(date){
        let result = [];
        let random = seedRandom(date.getDate());
        for (let i = 17; i <= 23; i++){
            if(random() < 0.5){
                result.push(i + ':00');
            }
            if(random() > 0.5){
                result.push(i + ':30');
            }
        }
        return result;
    }    
    const submitAPI = function(formData){
        return true;
    }
 */
    const initialState = {availableTimes: fetchAPI(new Date())};
    console.log(initialState)
    const [state,dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date){
        return {availableTimes: fetchAPI(new Date())}
    }

    const navigate = useNavigate();    
    function submitForm (formData){
        if(submitAPI(formData)){
           navigate("/confirmation");
        }
    }

    return(
    <div>
        <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/booking" element={<BookingPage availableTimes={state.availableTimes} dispatch={dispatch} submitForm={submitForm}/>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/confirmation" element={<Confirmation />}></Route>
        </Routes>
    </div>
    )
    }
    export default Main;