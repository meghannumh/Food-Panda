import React from "react";

//whenever this class is instanciated first the constructor is called then render is called  and at last componentDidMount will be called once the rendering is done.

// this is how parent child relationship work & this is what life cycle is.

//ComponentDidMount is used to make API calls.

//https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class UserClass extends React.Component {
  constructor(props) {
    console.log("child constructor called");
    super(props);
    this.state = {
      // count: 2,
      // count2: 4,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log(props.name);
    // console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "child cmoponent did mount");
    //API call
    const data = await fetch("https://api.github.com/users/meghannumh");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  render() {
    // const { name } = this.props;
    // debugger;
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count } = this.state;
    console.log(this.props.name + "child render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        {/* <h1>Count: {count}</h1>
        <button
          onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY (this.state.count = this.state.count+1)
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increases
        </button> */}
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: meghannumh@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
