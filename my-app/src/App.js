import React, {useState, useRef, useEffect} from "react";
import Weather from "./Weather";




export default function App() {
    const [location, setLocation] = useState(() => {
        const savedLocations = window.localStorage.getItem('locations');
        return savedLocations !== null
          ? JSON.parse(savedLocations)
          : [];
      });  ;

    useEffect(() => {
        localStorage.setItem('locations', JSON.stringify(location));
    }, [location]);

    function deleteItem(id) {
        setLocation(location.filter((item) => item.id !== id));

    }

    
    const inputLocation = useRef();
    
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
            <div className="searchfield">
                <input className="input" placeholder="Ange plats här" ref={inputLocation} it="place" onKeyPress={addItem}></input>
            </div>
            
           
            <div className="container">
                    { location.map(location => <Weather key={location.id} item={location} deleteItem={deleteItem}/>)}
            </div>
        </div>
    )
}


