import React from "react";
import "./price.css";
import Card from "./product-card";
import data from "./data";

function CreateCard(data){
    return <Card key={data.id} img={data.img} name={data.name} price={data.price} />
}

function Price(){
    return <div id="price-card" className="price section">
        <div className="heading">
        <h2>Product<br />
        <span>Prices</span>
        </h2>
        </div>
        <div className="price-container">
           {data.map(CreateCard)}
    </div>
    </div>
}

export default Price;