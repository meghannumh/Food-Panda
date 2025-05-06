import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>   object   => HTMLElement(render)

const heading = React.createElement("h1", {id:"heading"}, "Namaste React");

console.log(heading)
// prints objecy which is react element

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// JSX - is not HTML in JS, it is HTML like syntax 
// JSX (transpiled before it reaches the JS) - Parcel - Babel
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(rennder)


//React Element
const jsxHeading = <h1 id="heading" className="head">Namaste React using JSX</h1> //Babel is converting the react element //if JSX writing is in multiple lines then wrap inside parenthesis ()

console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

//React Component
// Class Based Component - OLD
// Functional Component - NEW

//React Functional Component : A function that returns a JSX code is a functional Component


const HeadingComponent2 = () => <h1>Namate React Functional Component</h1>

const Title = () => (
    <h1 className="heading">Heading - title</h1>
)

const number = 10000;

//Component compositions: composing two component in on as here title
const HeadingComponent = () => (
    <div className="container">
        {number}    
        {jsxHeading}
        <Title/>
        {Title()}
        <h1 className="heading">Namaste React Functional Component</h1>
    </div>
);                    // () -> works here but not {} because in case of () parenthesis this is implicit return, The curly braces {} define a block body, just like a regular function But nothing is being returned .
//suppose in variable number we are getting some API response and there is attacker who is sending malicious data but no need to worry becuase jsx takes care of this as it sanitizes the data.


root.render(<HeadingComponent/>) //this is how functional component is rendered