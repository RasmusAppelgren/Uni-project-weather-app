import React, {useState} from "react"
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=42fdaee782fb69b77ef4995f175ebe38`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
        console.log(location)
      })
      setLocation('')
    }
    
    
  }

  return (
    <div className="app">
      <div className="search">
        <input value={location} onChange={event => setLocation(event.target.value)} type="text" placeholder="Skriv in plats" onKeyPress={searchLocation}></input>
      </div>
      {data.name != undefined &&
      <div className="container">
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
      </div>
      }
    </div>
  );
}

export default App;
