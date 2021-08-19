import React from "react";
import "./footer.css";

function Footer(){
    return <div className="footer">
            <div className="col footer-logo">
                <a><i className="logo fab fa-apple"></i></a>
            </div>
            <div className="col">
                <ul>
                <h2>Quick links</h2>
                    <li className="links"><a>Home</a></li>
                    <li className="links"><a>Specification</a></li>
                    <li className="links"><a>Products</a></li>
                    <li className="links"><a>Contact</a></li>
                </ul>
            </div>
            <div className="col">
            <div>
            <h2>Reach Us</h2>
            <h3>Address: 1 Apple Park Way Cupertino, California, 95014-0642 United States (Maps)</h3>
            </div>
            </div>
            <div className="col">
            <div >
            <h2>Social links</h2>
            <ul className="social">
                    <li><a><i className="fab fa-facebook"></i></a></li>
                    <li><a><i className="fab fa-instagram"></i></a></li>
                    <li><a><i className="fab fa-twitter"></i></a></li>
                    <li><a><i className="fab fa-linkedin"></i></a></li>
                </ul>
            </div>
            </div>
    </div>
}

export default Footer;