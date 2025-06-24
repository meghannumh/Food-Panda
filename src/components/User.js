import { useState } from "react";

const User = (props) => {
  const [count] = useState(1);
  const [count2] = useState(3);

  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>Count: {count2}</h1>
      <h2>Name: Meghana {props.name}</h2>
      <h3>Location: Hubli</h3>
      <h4>Contact: meghannumh@gmail.com</h4>
    </div>
  );
};

export default User;
