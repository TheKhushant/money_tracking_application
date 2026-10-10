import React from "react";
function Awards() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="row flex flex-col md:flex-row items-center gap-10 ">
        <div className="w-full md:w-1/2">
          <img
            src="../home/award.png"
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl text-center ">
            Largest stock broker in India
          </h1>
          <p>
            2 million trading clients contribute to over percent top all volume
            in India daily by trading and in it.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <ul className="list-disc pl-5 space-y-3">
              <li>point 1</li>
              <li>point 2</li>
              <li>point 3</li>
            </ul>
          
          
            <ul className="list-disc pl-5 space-y-3">
              <li>point 1</li>
              <li>point 2</li>
              <li>point 3</li>
            </ul>
          </div>
            <img src="../home/press.png"></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;