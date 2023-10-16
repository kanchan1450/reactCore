import React from "react";
import  ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className = "logo" src="https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760"></img> 

            </div>
            <div className="Nav-item">
                <ul>
                    <li>Home</li>
                     <li>About Us</li>
                     <li>Contact Us</li>
                     <li>
                        cart
                     </li>
                </ul>
                
            </div>
        </div>
    );
};

const RestoCard = (props) => {
    const{resName,cuisine} = props;
    return(
        <div className="res-card">
            <img className="res-logo"
            alt = "res-logo"
             src ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi"></img>
            <h3 className="resto-name">{props.resName}</h3>
            <h4> {props.cuisine}</h4>
            <h4>4.8</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="resto-container">
                <RestoCard resName ="Meghna Food" cuisine ="Biryani, North Indian, Asian"/>
                <RestoCard resName ="KFC" cuisine ="Burger, Fast food"/>
                
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// rendering of functional component is used to do with angular bracket
root.render(<AppLayout/>)