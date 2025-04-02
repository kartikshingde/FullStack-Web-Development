const Header = () => {
  return (
    <div className="navbar bg-gray-300 p-4 flex flex-col sm:flex-row items-center justify-evenly shadow-lg ">
      <div className="logo">
        <img
          className="w-48 sm:w-64"
          src="https://www.coderarmy.in/assets/images/Logo_PNG/Black_Logo.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul className="flex space-y-2 sm:space-x-4 sm:space-y-0 sm:flex-row flex-col items-center">
          <li className="text-xl text-orange-600 hover:font-medium hover:underline hover:cursor-pointer">Home</li>
          <li className="text-xl hover:underline hover:cursor-pointer hover:font-medium hover:text-orange-600">
            About Us
          </li>
          <li className="text-xl hover:underline hover:cursor-pointer hover:font-medium hover:text-orange-600">
            Contact Us
          </li>
          <li className="text-xl hover:underline hover:cursor-pointer hover:font-medium hover:text-orange-600">
            Tutorial
          </li>
        </ul>
      </div>
      <div className="btns">
        <ul className="flex sm:space-x-4 sm:space-y-0 text-xl space-x-2 mt-4 sm:mt-0">
          <li className="bg-green-400 hover:bg-green-500 px-4 py-1 rounded-lg text-center hover:cursor-pointer">
            Login
          </li>
          <li className="bg-orange-400 hover:bg-orange-500 px-4 py-1 rounded-lg text-center hover:cursor-pointer">
            Dashboard
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
