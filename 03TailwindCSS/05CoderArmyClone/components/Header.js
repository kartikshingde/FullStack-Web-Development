const Header = () => {
  return (
    <div className="header">
      <div className="nav-items flex justify-evenly ">
        <img
          className="logo w-32 sm:w-54 px-4"
          src="https://www.coderarmy.in/assets/images/Logo_PNG/Black_Logo.png"
        />

        <ul className="flex justify-center items-center px-4 gap-4 sm">
          <li className="px-4 text-lg  rounded-xl hover:cursor-pointer hover:underline">Home</li>
          <li className="px-4 text-lg  rounded-xl hover:cursor-pointer hover:underline">About Us</li>
          <li className="px-4 text-lg  rounded-xl hover:cursor-pointer hover:underline">Contact Us</li>
          <li className="px-4 text-lg  rounded-xl hover:cursor-pointer hover:underline">Tutorial</li>
          <li className="px-4 py-1 text-lg bg-blue-400 rounded-xl hover:cursor-pointer hover:underline">Login</li>
          <li className="px-4 py-1 text-lg bg-blue-400 rounded-xl hover:cursor-pointer hover:underline">Dashboard</li>
        </ul>
        
      </div>
    </div>
  );
};

export default Header;
