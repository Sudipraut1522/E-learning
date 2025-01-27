import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaSlideshare,
  FaInfoCircle,
  FaPhoneAlt,
  FaBlog,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);

  const handleMobileResponsive = () => {
    setMobileOpen(!isMobileOpen);
  };

  const handleClose = () => {
    setMobileOpen(false);
  };
  return (
    <div className="w-full">
      <div className="h-[104px] bg-[#EFF4FF] flex items-center sticky top-0 z-20 shadow-sm w-full">
        <nav className="flex px-4 md:px-8 justify-between w-full text-[#656565] ">
          <div className="flex w-full md:max-w-[500px] md:justify-between flex-wrap">
            <NavLink to="/">
              <h1
                className="text-[#2563EB] font-[700] text-[24px] md:mx-auto max-w-[255px] cursor-pointer"
                onClick={handleMobileResponsive}
              >
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

      <div
        className={`${
          isMobileOpen ? "block" : "hidden"
        } sm:hidden bg-blue-50 w-full justify-center items-center relative`}
        role="navigation"
        aria-hidden={!isMobileOpen}
        aria-label="Mobile Menu"
      >
        <ul className="flex flex-col gap-2 w-full pt-4">
          <li className="flex items-center gap-4 p-2 hover:bg-gray-400 w-full justify-center">
            <FaHome className="text-gray-600" />
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-700"
              }
              onClick={handleClose}
            >
              Home
            </NavLink>
          </li>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-400 w-full justify-center">
            <FaBook className="text-gray-600" />
            <NavLink
              to="/course"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-700"
              }
              onClick={handleClose}
            >
              Course
            </NavLink>
          </li>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-400 w-full justify-center">
            <FaSlideshare className="text-gray-600" />
            <NavLink
              to="/slides"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-700"
              }
              onClick={handleClose}
            >
              Slides
            </NavLink>
          </li>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-400 w-full justify-center">
            <FaInfoCircle className="text-gray-600" />
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-700"
              }
              onClick={handleClose}
            >
              About Us
            </NavLink>
          </li>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-400 w-full justify-center">
            <FaPhoneAlt className="text-gray-600" />
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-700"
              }
              onClick={handleClose}
            >
              Contact Us
            </NavLink>
          </li>
          <li className="flex items-center gap-4 p-2 hover:bg-gray-400 w-full justify-center">
            <FaBlog className="text-gray-600" />
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-700"
              }
              onClick={handleClose}
            >
              Blog
            </NavLink>
          </li>
          <button
            className="absolute top-2 right-4 text-gray-500 md:hidden"
            onClick={handleClose}
            aria-label="Close Menu"
          >
            ✖
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
