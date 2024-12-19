import React, { useState,useEffect } from "react";
import "../Header/Header.css";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navLinks = ["Home", "About", "Write", "Authors", "Contact"];
  return (
    <>
      <div className="header flex flex-col">
        {!isScrolled && (
          <div>
            <div className="flex justify-around items-center p-4 shadow-2xl m-2 sticky top-0 z-50 bg-white">
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/menu--v1.png"
                alt="menu--v1"
                className="cursor-pointer"
              />
              <h1 className="font-Poppins font-bold text-3xl cursor-pointer">
                THE BLOG
                <span className="text-5xl text-violet-800 rounded">.</span>
              </h1>
              <div className="flex justify-center items-center">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/search.png"
                  alt="search"
                  className="rounded-full mx-2 text-white bg-violet-700 p-2 cursor-pointer"
                  title="Search"
                />
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/login-rounded-right.png"
                  alt="login-rounded-right"
                  className="rounded-full mx-2 text-white bg-violet-700 p-2 cursor-pointer"
                  title="login"
                />
              </div>
            </div>
          </div>
        )}

        <div className="subheader">
          <ul className="flex justify-center items-center p-2 m-2">
            {navLinks.map((item, index) => {
              return (
                <li
                  className="item font-Poppins tracking-wide mx-3 font-bold text-gray-600 hover:text-violet-700 hover:underline-offset-8 decoration-2 cursor-pointer"
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          {isScrolled && (
            <div className="flex my-10 justify-around shadow-lg p-4 sticky top-0 z-50 bg-white">
              <h1 className="font-Poppins font-bold text-3xl">
                THE BLOG
                <span className="text-5xl text-violet-800 rounded">.</span>
              </h1>
              <ul className="flex justify-center items-center p-2 m-2">
                {navLinks.map((item, index) => {
                  return (
                    <li
                      className="item font-Poppins tracking-wide mx-3 font-bold text-gray-600 hover:text-violet-700 hover:underline-offset-8 decoration-2"
                      key={index}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div className="my-10 w-screen h-screen bg-gray-300"></div>
      </div>
    </>
  );
};

export default Header;
