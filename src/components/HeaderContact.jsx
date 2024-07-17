
import React, { useState } from "react";
import { Link } from "react-router-dom";


import logo2 from "../assets/images/about/logo2.jpg";

const HeaderContact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-100">
    {/* Header */}
    <header className="w-full bg-blue-500 text-white p-4 ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo2} alt="Logo de Votre Entreprise" className="h-20" />
            <span className="ml-2 text-xl font-bold">
            NO WAHALA HOUSE
            </span>
          </div>
          {/* Menu on large screens */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-4">
              
              
              <li>
              <Link
            to="/"
            className=" text-2xl mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition duration-300"
          >
            Accueil
          </Link>
              </li>
              <li>
              <Link
            to="#"
            className="text-2xl mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition duration-300"
          >
            Contact
          </Link>
              </li>
            </ul>
          </nav>
          {/* Menu icon for small screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Responsive menu for small screens */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-500 text-white py-2 px-4 w-full text-center">
          <ul className="flex flex-col space-y-2">
          <li>
                <Link
                  to="/"
                  className=" text-2xl -4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition duration-300"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-2xl mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition duration-300"
                >
                 Contact
                </Link>
              </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderContact;
