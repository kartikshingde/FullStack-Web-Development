import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  // console.log("Header Rendered");

  // 1 .if no dependency array then useEffect() is called on every render
  // 2 .if dependency array is empty then useEffect is called Initial render (just Once)
  // 3 .if dependency array has btnNameReact then it is called whenever btnNameReact changes...

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg sticky top-0 flex-wrap">
      <div className="logo-container">
        <img className="logo w-40" src={LOGO_URL} />
      </div>
      <div className="nav-items flex items-center flex-wrap">
        <ul className="flex p-4 m-4 gap-4 flex-wrap ">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "⛔"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" className="links">
              Grocery
            </Link>
          </li>
          <li className="px-4">Cart</li>
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
