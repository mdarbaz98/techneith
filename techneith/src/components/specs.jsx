import React from "react";
import "./specs.css";

function Specs(){

    return <div id="specs" className="specs-section">
        <div className="heading">
        <h2>Product<br />
        <span>Specification</span>
        </h2>
        </div>
         <div className="specs-container">
            <div className="specs-image">
            <img src="https://static-www.o2.co.uk/sites/default/files/apple-watch-s6-billboard-xxl-foreground-151020.png" />
            </div>

            <div className="specs-features">
                <div className="specs-data">
                <i className="fas fa-phone-volume"></i>
                    <h3>Calling</h3>
                    <span>long-time calling support</span>
                </div>
                <div className="specs-data">
                <i className="fas fa-battery-full"></i>
                    <h3>1000mah battery</h3>
                    <span>battery life 72 hours</span>
                </div>
                <div className="specs-data">
                <i className="fas fa-tablet"></i>
                    <h3>2.5inch Screen</h3>
                    <span>big display</span>
                </div>
                <div className="specs-data">
                <i className="fas fa-wifi"></i>
                    <h3>Connectivity</h3>
                    <span>WIFI v5 and BLUETOOTH v5</span>
                </div>
            </div>
    </div>
    </div>
}

export default Specs;