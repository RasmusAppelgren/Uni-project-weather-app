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
      })
      setLocation('')
    }
    
  }

  return (
    <div className="app">
      <div className="search">
        <input value={location} onChange={event => setLocation(event.target.value)} type="text" placeholder="Skriv in plats" onKeyPress={searchLocation}></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} C</h1> : null}
          
          </div>
          <div className="description">
            {data.weather ? <p className="bold">{data.weather[0].main}</p> : null}
            
          </div>    
        </div>

        {data.name != undefined &&
          <div className="bottom">
          <div className="feels">
          {data.main ? <p className="bold">{data.main.feels_like.toFixed()}</p> : null}
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
        }


      </div>
      

    </div>
  );
}

export default App;
