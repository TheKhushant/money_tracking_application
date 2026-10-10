
import React from 'react';

function Stacks() {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row items-center gap-10">

                {/* Left Side: Features */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-bold mb-8">
                        Trust with confidence
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        <div className="feature">
                            <h2 className="text-xl font-semibold mb-3">
                                Heading 1
                            </h2>
                            <p className="text-gray-600 leading-7">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsa quia beatae id
                                doloremque! Quam eligendi voluptate tempore
                                provident rerum vitae.
                            </p>
                        </div>

                        <div className="feature">
                            <h2 className="text-xl font-semibold mb-3">
                                Heading 2
                            </h2>
                            <p className="text-gray-600 leading-7">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsa quia beatae id
                                doloremque! Quam eligendi voluptate tempore
                                provident rerum vitae.
                            </p>
                        </div>

                        <div className="feature">
                            <h2 className="text-xl font-semibold mb-3">
                                Heading 3
                            </h2>
                            <p className="text-gray-600 leading-7">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsa quia beatae id
                                doloremque! Quam eligendi voluptate tempore
                                provident rerum vitae.
                            </p>
                        </div>

                        <div className="feature">
                            <h2 className="text-xl font-semibold mb-3">
                                Heading 4
                            </h2>
                            <p className="text-gray-600 leading-7">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsa quia beatae id
                                doloremque! Quam eligendi voluptate tempore
                                provident rerum vitae.
                            </p>
                        </div>

                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src="../home/stack.png"
                        alt="Technology stack"
                        className="w-full h-auto object-contain"
                    />
                </div>

            </div>
        </div>
    );
}

export default Stacks;
