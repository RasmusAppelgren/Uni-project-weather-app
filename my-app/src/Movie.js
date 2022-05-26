import React, { useState, useEffect } from "react";
import axios from 'axios'

export default function Movie(props) {
    const [weather, setWeather] = useState()

    const city = props.item.title;  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=93f7c96ba8e7fe2b3abe5047a884432e`;  
    

    useEffect(() => {
        async function getWeather() {
            axios.get(url).then((response) => {
                setWeather(response.data)
              })
              .catch((response) => {
                alert("Hittades ej")
              });
        }
        getWeather();
    }, [city]); 

    console.log(weather)
    


    return (
        <li className="list-group-item">
            {props.item.title}
            <button className="btn btn-sm btn-danger float-end" onClick={() => {props.deleteItem(props.item.id)}}>X</button>
        </li>
    )
}
    
// components/WeatherList.js
/*
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const WeatherList = ({weathers}) => {
    return (
        <Row>
           {weathers.map(({dt, main, weather}) => (
                <Col key={dt}>
                    <WeatherCard 
                    temp_max={main.temp_max} 
                    temp_min={main.temp_min} 
                    dt={dt * 1000} 
                    main={weather[0].main} 
                    icon={weather[0].icon} 
                  />
                </Col>
            ))} 
        </Row>
    )
}

export default WeatherList;
*/