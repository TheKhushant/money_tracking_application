import React from "react";
function Education() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="row flex flex-col md:flex-row items-center gap-10 ">
        <div className="w-full md:w-1/2">
          <img
            src="../home/varsity.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-2xl mb-8">Free and open market Education</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium voluptatibus</p>
          <p className="mt-5 text-blue-500 font-bold">Link {"-->"}</p>
          <p className="mt-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium voluptatibus</p>
          <p className="mt-5 text-blue-500 font-bold">Link {"-->"}</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
