import React from "react";
import Navbar from "./navbar";
import HeroSection from "./hero-section";
import Specs from "./specs";
import Price from "./price";
import Footer from "./footer";

function App(){
    return <div>
        <Navbar />
        <HeroSection />
        <Specs />
        <Price />
        <Footer />
    </div>
}

export default App;