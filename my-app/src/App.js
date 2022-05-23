import React, {useState, useRef} from "react";
import Weather from "./weather";

function App() {
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
            
        </div>
  )
}

export default App;