import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  // console.log("Header Rendered");

  // 1 .if no dependency array then useEffect() is called on every render
  // 2 .if dependency array is empty then useEffect is called Initial render (just Once)
  // 3 .if dependency array has btnNameReact then it is called whenever btnNameReact changes...
  useEffect(() => {
    console.log("Use Effect Called ");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("LogOut")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

// export default Header;
