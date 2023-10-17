import React from "react";
import  ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


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