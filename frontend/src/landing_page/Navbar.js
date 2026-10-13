
import React from 'react';

function Navbar() {
    return (
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">

            {/* Logo */}
            <div>
                <img
                    src="../Navbar/logo.png"
                    alt="Logo"
                    className="w-16 h-auto"
                />
            </div>

            {/* Navigation Links */}
            <div>
                <ul className="flex flex-wrap items-center gap-4 md:gap-10 text-gray-700 font-medium">
                    <li className="hover:text-blue-600 cursor-pointer">Signup</li>
                    <li className="hover:text-blue-600 cursor-pointer">About</li>
                    <li className="hover:text-blue-600 cursor-pointer">Product</li>
                    <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
                    <li className="hover:text-blue-600 cursor-pointer">Support</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;