import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

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

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-lg bg-pink-50 fixed top-0 right-0 left-0 z-50">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus ? greenDot : redDot}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <a href="/about">About Us</a>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
            {/* In case of <a> tag it reloads the page bbut Link does not reload it will just navigate to page */}
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
