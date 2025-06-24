import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  console.log("Header rendered");

  // dont create state variables inside an if condition or loop and always create inside functional component
  const [btnNameReact, setStatus] = useState("Login");

  //if no dependency array => useEffect is called on every render
  //if dependency array is empty => useEffect is called on intial render(just once)
  //if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated
  useEffect(() => {
    console.log("useEffect called");
  });

  const onlineStatus = useOnlineStatus();
  const greenDot = "🟢";
  const redDot = "🔴";

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? greenDot : redDot}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
            {/* In case of <a> tag it reloads the page bbut Link does not reload it will just navigate to page */}
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setStatus("Logout")
                : setStatus("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
