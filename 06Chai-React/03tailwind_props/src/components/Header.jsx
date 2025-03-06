import React from "react";

const Header = (props) => {
  return (

    <div className="header flex justify-evenly bg-gray-50 shadow-lg sticky top-0 flex-wrap">
        <img className="w-70 h-auto" src="https://www.coderarmy.in/assets/images/Logo_PNG/Black_Logo.png"></img>
        <div className="mt-5 flex-wrap flex">
            <a className="ml-5 text-2xl text-orange-400 hover:text-orange-400 hover:underline" href="#">Home</a>
            <a className="ml-5 text-2xl hover:text-orange-400 hover:underline" href="#">About</a>
            <a className="ml-5 text-2xl hover:text-orange-400 hover:underline" href="#">Contact</a>
            <a className="ml-5 text-2xl hover:text-orange-400 hover:underline" href="#">Tutorial</a>
        </div>

        <div className="mt-5 flex md:flex-wrap">
          <button className="bg-orange-500 w-25 h-10 rounded-xl text-white p-1 hover:cursor-pointer ">Login</button>
          <button className="bg-orange-500 w-25 h-10 rounded-xl text-white p-1 hover:cursor-pointer ml-2">Signup</button>
      
        </div>
    </div>
    
  );
};

export default Header;
