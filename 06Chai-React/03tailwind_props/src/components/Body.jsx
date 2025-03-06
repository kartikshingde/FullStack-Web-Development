import React from "react";


const Body = () => {
  return (
    <div className="main flex flex-wrap">

        <div className="grid grid-cols-2 col-span-2 gap-2 mr-40 ml-40 h-150 w-auto justify-center items-center mt-8 mb-8">
            <div className="text">
              <h1  className="text-5xl text-blue-950 font-bold">Be a Part of our <span className="text-orange-500">Army</span></h1>
              <h1 className="text-3xl mt-2">A community of coders, making world a better place.</h1>

              <button className="bg-orange-400  rounded-xl w-35 text-black font-medium text-xl mt-10 p-4 hover:cursor-pointer ">Enroll Now</button>
              <button className="bg-white border-2 ml-5 border-orange-500  rounded-xl w-50 text-black font-medium text-xl mt-10 p-4 hover:cursor-pointer hover:bg-green-200 hover:duration-1000">Watch Video</button>

            </div>

            <div className="image">
                <img src="https://www.coderarmy.in/assets/images/Imgwebp/cwebp/frontpage-bgimage-removebg-min_1.jpg"></img>
            </div>

        </div>
      
    </div>
  );
};

export default Body;
