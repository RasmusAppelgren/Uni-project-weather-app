import React from "react";


export default function Weather(props) {
    function getWeather(grade) {
        let stars = []
        for (let i = 0; i < grade; i++ ){
            stars.push(<img src={star} width="30px" alt="star" className="float-end"></img>)
        }
        return stars
    }

    return (
        <li className="list-group-item">
            {props.item.title}
            
            {getStars(props.item.grade)}
            
            <button className="btn btn-sm btn-danger float-end" onClick={() => {props.deleteItem(props.item.id)}}>X</button>
        </li>
    )
}