import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faFileAlt,
  faSearch,
  faBell,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import GoPremium from "../GoPremium";
import { NavLink } from "react-router-dom";

const SideNavForDashboard: React.FC = () => {
  const [isMobileVisible, setIsMobileVisible] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileVisible((prev) => !prev);
  };

  const closeMobileSidebar = () => {
    setIsMobileVisible(false);
  };

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-10">
        <button
          onClick={toggleMobileSidebar}
          className="text-blue-600 text-xl p-2"
        >
          ☰
        </button>
      </div>

      <div
        className={` md:static top-0 left-0 h-auto z-40 transform ${
          isMobileVisible ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 w-[250px]`}
      >
        <nav className="flex flex-col gap-6 px-4 h-full border border-gray-200">
          <NavLink to="/" onClick={toggleMobileSidebar}>
            <div className="p-2">
              <h1 className="text-[36px] font-[700] text-blue-600">Braimy.</h1>
            </div>
          </NavLink>

          <ul className="flex flex-col gap-2 text-[16px]">
            <NavLink to="/dashboard" onClick={toggleMobileSidebar}>
              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-400 p-2">
                <FontAwesomeIcon icon={faHome} className="text-black" />
                <span>Dashboard</span>
              </li>
            </NavLink>
            <NavLink to="courseintro">
              <li
                className="flex items-center gap-3 cursor-pointer hover:bg-gray-400 p-2"
                onClick={toggleMobileSidebar}
              >
                <FontAwesomeIcon icon={faBook} className="text-black" />
                <span>Courses</span>
              </li>
            </NavLink>
            <li
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-400 p-2"
              onClick={toggleMobileSidebar}
            >
              <FontAwesomeIcon icon={faFileAlt} className="text-black" />
              <span>Slides</span>
            </li>
            <li
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-400 p-2"
              onClick={toggleMobileSidebar}
            >
              <FontAwesomeIcon icon={faSearch} className="text-black" />
              <span>Search</span>
            </li>
            <li
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-400 p-2"
              onClick={toggleMobileSidebar}
            >
              <FontAwesomeIcon icon={faBell} className="text-black" />
              <span>Remainders</span>
            </li>
            <NavLink to="setting" onClick={toggleMobileSidebar}>
              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-400 p-2">
                <FontAwesomeIcon icon={faCog} className="text-black" />
                <span>Settings</span>
              </li>
            </NavLink>
          </ul>
          <div className="mt-auto">
            <GoPremium />
          </div>
        </nav>
      </div>
    </>
  );
};

export default SideNavForDashboard;
