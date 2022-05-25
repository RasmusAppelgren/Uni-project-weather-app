import React, {useState, useRef} from "react";
import Weather from "./weather";

function App() {
<<<<<<< Updated upstream
    const [weatherLocation, setWeatherLocation] = useState([{
      id: 1,
      city: "Stockholm"
    }]);

    // Tar input och lägger i variabler
    const inputLocation = useRef();


    // Först kontrolleras input så det inte är tomt, om tomt skickas prompt
    function addItem(event){
      
      event.preventDefault();

      if (inputLocation.current.value === "") {
          alert("Du måste ange något!");
          return false;
      }
      
      const newId = weatherLocation.length > 0 ? weatherLocation[weatherLocation.length - 1].id + 1 : 1;
      // setWeatherLocation skickar in datan till weatherLocation
      setWeatherLocation([...weatherLocation, {
          id: newId,
          city: inputLocation.current.value     
      }]);
      // Rensar fälten efter att filmen är tillagd
      inputLocation.current.value = "";
      console.log(weatherLocation)
  }

  return (
    <div>
            <form onSubmit={addItem}>
            <input className="form-control" placeholder="Ange filmtitel här" ref={inputLocation} it="title"></input>
      
            
            <input type="submit" className="btn btn-success mt-3" value="Spara film"></input>
            </form>

            <ul className="list-group">

                { weatherLocation.map(locate => <Weather key={locate.id} item={locate}/>)}
                
     
            </ul>
            
=======
  const [data, setData] = useState([{
    id: 0,
    title: ""
}]);
  const [location, setLocation] = useState('')
  

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=76d38a6d1f52a05bab65b240fe495e3b`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      .catch((response) => {
        alert("Hittades ej")
      });
      setLocation('')
    }
    

  const saveLocation = (place) => {	 
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    setData([...data, {
      id: newId,
      title: place
    }]);
    localStorage.setItem("city", JSON.stringify(data));
  
  };
  
  }

  return (
    <div className="app">
      <div className="search">
        <input value={location} onChange={event => setLocation(event.target.value)} type="text" placeholder="Skriv in plats" onKeyPress={searchLocation}></input>
        <button onClick={() => this.saveLocation()}>
        Click me
        </button>
        
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
>>>>>>> Stashed changes
        </div>
  )
}

export default App;