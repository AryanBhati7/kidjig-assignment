import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./index.js";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "About", path: "#" },
    { title: "Services", path: "#" },
    { title: "Process", path: "#" },
    { title: "Work", path: "#" },
    { title: "Pricing", path: "#" },
    { title: "FAQs", path: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed text-white top-0  font-custom z-30 w-full  flex items-center justify-between p-2 px-4 sm:px-6 lg:px-44 bg-transparent mx-auto backdrop-blur-lg">
      {!isMenuOpen && (
        <>
          <div className="z-0 absolute -top-[19rem] right-[24rem] w-[30rem] h-[24rem] bg-gradient-to-r from-blue-500 to-blue-[#5e74e8] rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="z-0 absolute -top-[17rem] right-[6rem] w-[25rem] h-[32rem] bg-gradient-to-r from-blue-500 to-blue-[#5e74e8] rounded-full blur-3xl opacity-30 pointer-events-none" />
        </>
      )}
      <div className="text-2xl font-bold">
        <Link to="/" className="hover:text-gray-300">
          <img src="/assets/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="hidden lg:flex space-x-7 text-lg">
        {navLinks.map((navLink, index) => (
          <Link
            key={index}
            to={navLink.path}
            className="hover:text-[#748BFF] z-50"
          >
            {navLink.title}
          </Link>
        ))}
      </div>
      <Button className="hidden lg:block hover:bg-[#748BFF]">
        Book a call
      </Button>
      <div className="lg:hidden">
        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {/* Side Menu */}
      {isMenuOpen && (
        <div
          className={`fixed top-0 right-0 min-h-screen w-64 bg-[#919191] transform ${
            isMenuOpen ? "translate-x-0" : "hidden"
          } transition-transform duration-300 ease-in-out`}
        >
          <button
            className="text-white focus:outline-none absolute top-4 right-4"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="flex flex-col items-center mt-20 space-y-6">
            {navLinks.map((navLink, index) => (
              <Link
                key={index}
                to={navLink.path}
                className="text-white hover:text-[#748BFF] text-xl"
                onClick={toggleMenu}
              >
                {navLink.title}
              </Link>
            ))}
            <Button className="hover:bg-[#748BFF] mt-4">Book a call</Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
