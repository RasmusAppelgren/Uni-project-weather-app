import React, {useState, useEffect} from 'react'
import axios from 'axios'

const url = 'https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&APPID=76d38a6d1f52a05bab65b240fe495e3b'

const Weather = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    },[])

    if(!data) return null

    console.log(data)

  return (
    <div className="location">
          <div className="icon">
            {data.weather ? <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img> : null}
          </div>
          <div className="located">
            <p>{data.name}</p>
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            {data.weather ? <p className="bold">{data.weather[0].main}</p> : null}
          </div>
          <div className="information">
            <div className="feel">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Känns som</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}</p> : null}
              <p>Fuktighet</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed} m/s</p> : null}
              <p>Vind </p>
            </div>
          </div> 
        </div>
  )
}

export default Weather
