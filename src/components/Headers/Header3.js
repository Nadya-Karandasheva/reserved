import React from "react";
import './Header1.css'
import logo from './logo1.png'

const Header3 = () =>{

    return(
        <nav>
            <a href="/"><img src={logo} alt="logo"/></a>
            <a href="/login"><button className="log">Log in</button></a>
        </nav>
    )
}

export default Header3;