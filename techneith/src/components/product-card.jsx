import React from "react";

function Card(props){
    return <div className=" card">
    <img src={props.img} />
    <div className="card-data">
    <h3>{props.name}</h3>
    <span>{props.price}</span>
    <button><i className="fas fa-shopping-bag"></i></button>
    </div>
</div>
}

export default Card;