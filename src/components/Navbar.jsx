import React from "react"; 
import Logo from "../assets/images/logo.png"
const Navbar = () =>{
    return (
        <div className="navbar">
            <img src={Logo} className="logo" alt="" />
            <ul className="list">
                <li>Home</li>
                <li>Contact us</li>
                <li>Services</li>
                <li> Cart</li>

            </ul>
        </div>
        
    )
}
export default Navbar