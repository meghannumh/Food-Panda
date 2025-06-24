import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent cmoponent did mount");
  }

  componentDidUpdate() {
    console.log("parent component did update");
  }

  componentWillUmount() {
    console.log("paren component will unmount"); // gets called when component is different for example if the page is changed with different component.
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React</h2>
        {/* <User name={"Meghana (function)"} /> */}
        <UserClass
          name={"Meghana (classes)"}
          location={"Hubli, Karnataka (classes)"}
        />
        {/* <UserClass name={"Elon Musk (classes)"} location={"US"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React</h2>
//       {/* <User name={"Meghana (function)"} /> */}
//       <UserClass
//         name={"Meghana (classes)"}
//         location={"Hubli, Karnataka (classes)"}
//       />
//     </div>
//   );
// };

export default About;

// - Parent Constructor
// - Parent render

//   - First Child Constructor
//   - First Child render

//   - Second Child Constructor
//   - Second Child render

// Inrender phase the virtual DOM is created and UI elements are updated and the render phase and creating virtual DOM is expensive so all the childern components render phase is patched and then the commit happens and updating UI elements

// <DOM UPDATED - IN SINGLE BATCH>

//   -First Child componentDidMount
//   -Second Child componentDidMount

// -Parent componentDidMount

/****
 *
 * ----------Mounting Cycle----------
 *
 * costructor (dummy data)
 * Render (dummydata)
 *    <HTML Dummy>
 * Component Did Mount
 *    <API Call>
 *    <this.setState>   -> state variables are updated.
 *
 *
 * ----------UPDATE---------
 *
 *      render(API data)
 *      <HTML (new API data)>
 *      component did update
 */
