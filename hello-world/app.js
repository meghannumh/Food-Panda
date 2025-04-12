const heading = React.createElement("h1", {id: "heading"}, "Hello World in React"); //{} =>this object is where we give attributes to the tag
//here create element is creating an object and returning it to heading 

console.log(heading);  //prints an object so heading is an object here

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)
