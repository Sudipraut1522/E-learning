import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="h-[104px] bg-[#EFF4FF] flex items-center sticky top-0 z-20 shadow-sm">
      <nav className="flex px-4 md:px-8 justify-between w-full text-[#656565] ">
        <div className="flex w-full md:max-w-[500px] md:justify-between flex-wrap">
          <NavLink to="/">
            <h1 className="text-[#2563EB] font-[700] text-[24px] md:mx-auto max-w-[255px] cursor-pointer">
              Braimy.
            </h1>
          </NavLink>
          <ul className="md:flex hidden gap-6 ">
            <li className="flex items-center gap-2 cursor-pointer">
              <NavLink to="/" className="flex gap-2">
                <i className="fas fa-home text-gray-400"></i>
                <span>Home</span>
              </NavLink>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <NavLink to="courseintro" className="flex gap-2 items-center">
                <i className="fas fa-book text-gray-400"></i>
                <span>Courses</span>
                <div className="flex-grow h-px bg-gray-600 hidden"></div>
              </NavLink>
            </li>
            <li className="flex items-center gap-2 cursor-pointer">
              <i className="fas fa-file-alt text-gray-400"></i>
              <span>Slides</span>
              <div className="flex-grow h-px bg-gray-600"></div>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-20 flex-wrap">
          <ul className="md:flex  md:gap-6 hidden">
            <li className="cursor-pointer">AboutUs</li>
            <li className="cursor-pointer">ContactUs</li>

            <li className="cursor-pointer">Blog</li>
          </ul>

          <div className="flex  items-center gap-3   md:gap-6">
            <i className="fas fa-bell cursor-pointer"></i>
            <NavLink to="search">
              <i className="fas fa-search text-gray-500 mr-2 cursor-pointer"></i>
            </NavLink>
            <NavLink to="/register">
              <h2 className="cursor-pointer">Register</h2>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
