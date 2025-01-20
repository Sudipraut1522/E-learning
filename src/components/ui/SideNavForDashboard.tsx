import React from "react";
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

const SideNavForDashboard: React.FC = () => {
  return (
    <div>
      <nav className="w-[332px] flex flex-col gap-6 px-4 top-0 border border-gray-200 h-[840px] bg-blue-50">
        <div className="p-2">
          <h1 className="text-[36px] font-[700] text-blue-600">Braimy.</h1>
        </div>

        <ul className="h-[360px] flex flex-col gap-2 text-[16px]">
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-400 p-2">
            <FontAwesomeIcon icon={faHome} className="text-gray-400" />
            <span className="text-[18px]">Dashboard</span>
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-400 p-2">
            <FontAwesomeIcon icon={faBook} className="text-gray-400" />
            <span>Courses</span>
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-400 p-2">
            <FontAwesomeIcon icon={faFileAlt} className="text-gray-400" />
            <span>Slides</span>
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-400 p-2">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            <span>Search</span>
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-400 p-2">
            <FontAwesomeIcon icon={faBell} className="text-gray-400" />
            <span>Remainders</span>
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-400 p-2">
            <FontAwesomeIcon icon={faCog} className="text-gray-400" />
            <span>Settings</span>
          </li>
        </ul>
        <div className="pt-24">
          <GoPremium />
        </div>
      </nav>
    </div>
  );
};

export default SideNavForDashboard;
