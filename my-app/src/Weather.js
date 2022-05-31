import React, { useState, useEffect } from 'react';
import axios from 'axios'


export default function Weather(props) {
    const [temp, setTemp] = useState()
    const [feels_like, setFeels_like] = useState()
    const [wind, setWind] = useState()
    const [humidity, setHumidity] = useState()
    const [icon, setIcon] = useState()
    const [error, setError] = useState()
    
    // Props från föräldern "App.js". Skickas med i API:anropet. 
    const city = props.item.place;  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=93f7c96ba8e7fe2b3abe5047a884432e`;  
    
    // Den data vi önskar sätts till aktuellt state.
    useEffect(() => {
        async function getWeather() {
            axios.get(url).then((response) => {
                setTemp(response.data.main.temp)
                setFeels_like(response.data.main.feels_like)
                setWind(response.data.wind.speed)
                setHumidity(response.data.main.humidity)
                setIcon(response.data.weather[0].icon)
              })
              .catch((response) => {
                // Vid ingen träff från API:et tas platsen bort från localstorage. Sköts av föräldern.
                props.deleteItem(props.item.id)
                // Sätter error state till true om inget hittats.
                setError(true)
                
              });
        }
        getWeather();
    }, [city]); 

    // Om error är true returneras inget. 
    if (error) {
        return (null)
    } else {
    return (
        <div className='location'>
            <div className='weather'>
             <p className="bold">{props.item.place}</p>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
                <h1>{temp}°C</h1>
           </div>
           <div className="information">
             <div className="feel">
               <p className="bold">{feels_like}°C</p>
               <p>Känns som</p>
             </div>
             <div className="humidity">
               <p className="bold">{humidity}%</p>
               <p>Fuktighet</p>
             </div>
             <div className="wind">
               <p className="bold">{wind} m/s</p>
               <p>Vind </p>
             </div>
           </div>
            <div className='button'>         
                <button id="deletebutton" className="btn btn-sm btn-dark float-end" onClick={() => {props.deleteItem(props.item.id)}}>X</button>
            </div>   
        </div>

        
    )
}
}
