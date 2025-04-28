import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>   object   => HTMLElement(render)

const heading = React.createElement("h1", {id:"heading"}, "Namaste React");

console.log(heading)

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// JSX - is not HTML in JS, it is HTML like syntax 
// JSX (transpiled before it reaches the JS) - Parcel - Babel
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(rennder)

const jsxHeading = <h1 id="heading" className="head">Namaste React using JSX</h1> //Babel is converting the react element 

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
