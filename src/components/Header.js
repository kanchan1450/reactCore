 import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setBtnName] = useState("Login")
   
    return (
        <div className="header">
            <div className="logo-container">
                <img className = "logo" src= {LOGO_URL}></img> 

            </div>
            <div className="Nav-item">
                <ul>
                    <li><Link to = "/">Home</Link></li>
                     <li><Link to = "/about">About Us</Link></li>
                     <li><Link to = "/contact">Contact Us</Link></li>
                     <li>
                        cart
                     </li>
                     <button className="login-button" onClick={() => {
                        btnName === "Login"? setBtnName("Logout"):setBtnName("Login");
                    console.log(btnName)}} >{btnName}</button>
                </ul>
                
            </div>
        </div>
    );
};

export default Header;