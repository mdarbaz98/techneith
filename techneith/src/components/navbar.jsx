import React from "react";
import "./navbar.css";

function Navbar(){

    return <div id="home">
        <header>
            <div className="logo">
            <a><i className="logo fab fa-apple"></i></a>
            </div>
            <input type="checkbox" id="menu" />
                <label For="menu"><i id ="menu-icon"className="fas fa-bars"></i></label>

            <nav>
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="specs">Specs</a></li>
                    <li><a href="price-card">Prices</a></li>
                </ul>
            </nav>
        </header>
    </div>
}

export default Navbar;