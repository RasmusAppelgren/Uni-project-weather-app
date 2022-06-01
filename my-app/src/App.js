import React, {useState, useRef, useEffect} from "react";
import Weather from "./Weather";
import logo from "./images/logo.png"




export default function App() {
    // Hämtar från localstorage och sätter till current stat för location.
    const [location, setLocation] = useState(() => {
        const savedLocations = window.localStorage.getItem('locations');
        return savedLocations !== null
          ? JSON.parse(savedLocations)
          : [];
      });  ;
    // Vid förändringar av location sparas dessa i localstorage.
    useEffect(() => {
        localStorage.setItem('locations', JSON.stringify(location));
    }, [location]);

    // Alla ID som inte matchar ID som skickas in i funktionen läggs till i state location.
    function deleteItem(id) {
        setLocation(location.filter((item) => item.id !== id));

    }

    
    const inputLocation = useRef();
    // För att spara en plats. Genererar nytt id och sätter in plats samt ID i listan.
    function addItem(event){
        if (event.key === 'Enter') {
            event.preventDefault();

            if (inputLocation.current.value === "") {
                alert("Du måste ange en plats");
                return false;
            }
        
            
            const newId = location.length > 0 ? location[location.length - 1].id + 1 : 1;
            // setLocation skickar in datan till location
            setLocation([...location, {
                id: newId,
                place: inputLocation.current.value     
            }]);
            
            inputLocation.current.value = "";
        }
    }

    return (
       
            

        
        <div className="App">
            <div className="top">
                <nav className="navbar navbar-light">
                    <img className="logo" src={logo}></img>
                </nav>
            </div>
            <div className="searchfield">
                <input className="input" placeholder="Ange plats här" ref={inputLocation} it="place" onKeyPress={addItem}></input>
            </div>
            
        
            <div className="container">
                    { location.map(location => <Weather key={location.id} item={location} deleteItem={deleteItem}/>)}
            </div>
        </div>
        
    )
}


