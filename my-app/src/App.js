import React, {useState, useRef, useEffect} from "react";
import Weather from "./Weather";
import Movie from "./Weather";


export default function MovieList() {
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

    
    const inputTitle = useRef();
    function addItem(event){
        
        event.preventDefault();

        if (inputTitle.current.value === "") {
            alert("Du måste ange en plats");
            return false;
        }
    
        
        const newId = location.length > 0 ? location[location.length - 1].id + 1 : 1;
        // setLocation skickar in datan till location
        setLocation([...location, {
            id: newId,
            title: inputTitle.current.value     
        }]);
        
        inputTitle.current.value = "";
    }

    return (
        <div>
            <form onSubmit={addItem}>
            <input className="form-control" placeholder="Ange filmtitel här" ref={inputTitle} it="title"></input>
       
            
            <input type="submit" className="btn btn-success mt-3" value="Spara film"></input>
            </form>

            <ul className="list-group">

                { location.map(location => <Weather key={location.id} item={location} deleteItem={deleteItem}/>)}
                
     
            </ul>
        </div>
    )
}


