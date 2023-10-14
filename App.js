import React from "react";
import  ReactDOM from "react-dom/client";

// React.creatElement => React Elemnt - JS object => HTML Elemnt(render)
const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div",{id: "child"},[
    React.createElement("h2",{},"I am in h2 tag"),
    React.createElement("h3", {}, "I am in h3 tag")


]));
console.log(parent);

// JSX - it is a HTML like syntax, It is used to write development environment friendly code, bcoz react core code is very tough to read and maintain it.
const heading = <h1 id = "heading">I am JSX</h1>
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);