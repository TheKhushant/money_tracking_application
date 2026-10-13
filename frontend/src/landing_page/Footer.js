import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 px-6 py-10">
      <div className="container mx-auto">
        {/* Footer Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div>
            <img
              src="../Navbar/logo.png"
              alt="KS Bank Logo"
              className="w-16 h-auto mb-4"
            />

            <p className="text-gray-600 text-sm leading-6">
              Invest in stocks, mutual funds, ETFs and more with a simple and
              reliable investment platform.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Support</h2>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Report an Issue
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">Legal</h2>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-gray-800 gap-6">
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            consequuntur optio maiores consequatur quidem obcaecati commodi
            voluptatem! Animi esse, quo architecto sint eum recusandae numquam
            dolor accusamus minus iure adipisci? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repellat consequuntur optio maiores
            consequatur quidem obcaecati commodi voluptatem! Animi esse, quo
            architecto sint eum recusandae numquam dolor accusamus minus iure
            adipisci?
          </p>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            consequuntur optio maiores consequatur quidem obcaecati commodi
            voluptatem! Animi esse, quo architecto sint eum recusandae numquam
            dolor accusamus minus iure adipisci?
          </p>
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            consequuntur optio maiores consequatur quidem obcaecati commodi
            voluptatem! Animi esse, quo architecto sint eum recusandae numquam
            dolor accusamus minus iure adipisci? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repellat consequuntur optio maiores
            consequatur quidem obcaecati commodi voluptatem! Animi esse, quo
            architecto sint eum recusandae numquam dolor accusamus minus iure
            adipisci?
          </p>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-300 mt-10 pt-6">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} KS Bank. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
