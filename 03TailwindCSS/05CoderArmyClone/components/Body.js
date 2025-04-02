import React from "react";
const Body = () => {
  return (
    <div className="main sm:grid sm:grid-cols-3 sm:mt-[120px] justify-evenly mt-2">
      <div className="text sm:ml-[18%] col-span-2 space-y-2 ml-[5%]">
        <p className="sm:text-[60px] font-bold text-[40px]">
          <span className="text-[#002057]">Be a part of our </span>
          <span className="text-orange-500">Army!</span>
        </p>
        <h2 className="text-2xl">
          A community of coders, making world a better place.
        </h2>

        <div className="btns space-x-4 sm:mt-20 mt-2">
          <button className="  bg-orange-400 text-black font-medium px-8 py-4 rounded-xl cursor-pointer hover:bg-orange-500">Enroll Now</button>
          <button className=" bg-white px-8 py-4 font-medium rounded-xl border border-orange-400 cursor-pointer hover:bg-green-300">Watch Video</button>
        </div>
      </div>

      <div className="image flex justify-center">
        <img
          className="w-128"
          src="https://www.coderarmy.in/assets/images/Imgwebp/cwebp/frontpage-bgimage-removebg-min_1.jpg"
        />
      </div>
    </div>
  );
};

export default Body;
