
import React from "react";

function Pricing() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* Left Section */}
        <div className="w-full md:w-1/3">
          <h1 className="text-3xl font-bold mb-5">
            Unbeatable Price
          </h1>

          <p className="text-gray-600 leading-7 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto vel quia perspiciatis asperiores voluptatem est iste
            corrupti in quaerat corporis. Vero accusamus ducimus fugiat
            quo placeat. Voluptatibus odit dolore iste.
          </p>

          <p>
            <a
              href="#"
              className="text-blue-600 font-semibold hover:text-blue-800"
            >
              See Price {"-->"} 
            </a>
          </p>
        </div>

        {/* Right Section: Pricing Cards */}
          <div className=" text-center rounded-lg shadow-sm w-28"></div>
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Card 1 */}
          <div className="border border-gray-300 p-6 text-center rounded-lg shadow-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              0 Rs
            </h2>

            <p className="text-gray-600 leading-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae iusto ipsum dolorem soluta.
            </p>
          </div>
          {/* Card 2 */}
          <div className="border border-gray-300 p-6 text-center rounded-lg shadow-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              0 Rs
            </h2>

            <p className="text-gray-600 leading-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae iusto ipsum dolorem soluta.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Pricing;
