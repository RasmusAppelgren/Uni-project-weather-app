import React, {useState, useRef, useEffect} from "react";
import Movie from "./Movie";


export default function MovieList() {
    const [movies, setMovies] = useState(() => {
        const savedLocations = window.localStorage.getItem('items');
        return savedLocations !== null
          ? JSON.parse(savedLocations)
          : [];
      });  ;

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(movies));
    }, [movies]);

    function deleteItem(id) {
        setMovies(movies.filter((item) => item.id !== id));

    }

    
    const inputTitle = useRef();
    function addItem(event){
        
        event.preventDefault();

        if (inputTitle.current.value === "") {
            alert("Du måste ange en titel för att kunna spara filmen");
            return false;
        }
    
        
        const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
        // setMovies skickar in datan till movies
        setMovies([...movies, {
            id: newId,
            title: inputTitle.current.value     
        }]);
        // Rensar fälten efter att filmen är tillagd
        inputTitle.current.value = "";
    }


    /*
    Returnerar html-elementen med inputfält och för varje film i "movies"
    skapas ett li-element med tillhörande stjärnor och ta bort knapp.
    */
    return (
        <div>
            <form onSubmit={addItem}>
            <input className="form-control" placeholder="Ange filmtitel här" ref={inputTitle} it="title"></input>
       
            
            <input type="submit" className="btn btn-success mt-3" value="Spara film"></input>
            </form>

            <ul className="list-group">

                { movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteItem}/>)}
                
     
            </ul>
        </div>
    )
}


