 import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setBtnName] = useState("Login")
   
    return (
        <div className="flex justify-between bg-teal-400 shadow-lg border border-teal-900 border-solid">
            <div className = "w-[100]">
                <img className="rounded-full mx-2 my-2 shadow-lg border-2 border-solid border-teal-700" src= {LOGO_URL}></img> 

            </div>
            <div className="flex items-center">
                <ul className="flex m-4 p-4">
                    <li className="px-4 underline font-bold"><Link to = "/">Home</Link></li>
                     <li className="px-4 underline font-bold"><Link to = "/about">About Us</Link></li>
                     <li className="px-4 underline font-bold"><Link to = "/contact">Contact Us</Link></li>
                     <li className="px-4 underline font-bold">
                        cart
                     </li>
                     <button className="px-4 font-bold border-2 border-solid border-teal-900 rounded-md" onClick={() => {
                        btnName === "Login"? setBtnName("Logout"):setBtnName("Login");
                    console.log(btnName)}} >{btnName}</button>
                </ul>
                
            </div>
        </div>
    );
};

export default Header;