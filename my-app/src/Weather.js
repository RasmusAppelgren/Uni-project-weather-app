import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function Weather(props) {
    const [weather, setWeather] = useState()
    const [temp, setTemp] = useState()
    const [feels_like, setFeels_like] = useState()
    const [wind, setWind] = useState()
    const [humidity, setHumidity] = useState()
    const [icon, setIcon] = useState()
    const [error, setError] = useState(null)

    const city = props.item.title;  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=93f7c96ba8e7fe2b3abe5047a884432e`;  
    

    useEffect(() => {
        async function getWeather() {
            axios.get(url).then((response) => {
                setWeather(response.data)
                setTemp(response.data.main.temp)
                setFeels_like(response.data.main.feels_like)
                setWind(response.data.wind.speed)
                setHumidity(response.data.main.humidity)
                setIcon(response.data.weather[0].icon)
              })
              .catch((response) => {
                setError(error)
                alert("Hittades ej")
              });
        }
        getWeather();
    }, [city]); 
    console.log(error)
    if (error) {
        return (null);
    } else { 
    return (

        

        <li className="list-group-item">
            {props.item.title}
            {temp}
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
            <button className="btn btn-sm btn-danger float-end" onClick={() => {props.deleteItem(props.item.id)}}>X</button>
        </li>
    )
}}
 
