const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div",{id: "child"},[
    React.createElement("h2",{},"I am in h2 tag"),
    React.createElement("h3", {}, "I am in h3 tag")


]),
    React.createElement("div",{id: "child2"},[
    React.createElement("h2",{},"I am in h1 tag"),
    React.createElement("h3", {}, "I am in h2 tag")]
)]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);