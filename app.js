import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {}, "Hello World from React.JS");

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement
(
    "div",
    { id: "parent" },
    React.createElement
    (
        "div",
        { id: "child" },
        React.createElement("h1", {}, "Hello world from React.JS")
    )
);

root.render(parent)

console.log(React);

console.log(<h1>Hello</h1>);