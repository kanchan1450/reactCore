import React from "react";
import  ReactDOM from "react-dom/client";

const title = <h1 id="title">Learning React from basic</h1>

const Component =() => {
    return <h2>I am another function function component, which resite in another function</h2>
}
// Creation of functional component in react

const Heading = () => (
    <div id="container">

        {/* This is calling of React element inside it */}
        {title} 


        {/* we can directly write any string and mathematical opearation with the help of curly braces{} */}
        {1000+2000}
        {<h2>My name is kanchan sharma</h2>}

        
        {/* This is calling method of function inside another function */}
        {Component()}  
        <Component/> 
        <Component></Component>
    <h1 className="heading">This is functional component Learning</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// rendering of functional component is used to do with angular bracket
root.render(<Heading/>);