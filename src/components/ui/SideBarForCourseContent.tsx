import React, { useState } from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCogs,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const SideBarForCourseContent: React.FC = () => {
  const [dropDown, setDropDown] = useState(true);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <aside className="md:max-w-[403px] bg-white text-[16px] border border-gray-100 fixed top-0">
      <div className="w-auto flex flex-col border border-gray-100">
        <h1 className="border border-gray-100 h-[96px] flex items-center px-6 w-full">
          Course Content
        </h1>
        <ul className="flex flex-col gap-3">
          <li>
            <div className="border border-gray">
              <div
                className={`flex justify-between items-center cursor-pointer p-4 relative`}
                onClick={handleDropDown}
              >
                <span>Getting Started</span>
                <span>
                  <IoMdArrowDropdown
                    className={` ${
                      dropDown ? "rotate-180" : "rotate-0"
                    } transition-transform duration-300`}
                  />
                </span>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  dropDown ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <ul className="flex flex-col gap-4 w-full p-6 text-gray-600 text-[14px]">
                  <li className="flex items-center gap-2 py-2">
                    <FaCheckCircle className="text-green-500" /> Welcome to the
                    course
                  </li>
                  <li className="flex items-center gap-2 py-2">
                    <FaRegQuestionCircle className="text-blue-500" /> What is
                    React Js?
                  </li>
                  <li className="flex items-center gap-2 py-2">
                    <FaArrowRight className="text-yellow-500" /> Why React but
                    Not js?
                  </li>
                  <li className="flex items-center gap-2 py-2">
                    <FaCogs className="text-gray-500" /> Setting Up Environment
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            {" "}
            <div
              className={`flex justify-between items-center cursor-pointer p-4 relative`}
            >
              <span>JavaScript refresher</span>
              <span>
                <IoMdArrowDropdown
                  className={` ${
                    dropDown ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </span>
            </div>
          </li>
          <li>
            {" "}
            <div
              className={`flex justify-between items-center cursor-pointer p-4 relative`}
              onClick={handleDropDown}
            >
              <span>React Basics & Working with Components</span>
              <span>
                <IoMdArrowDropdown
                  className={` ${
                    dropDown ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </span>
            </div>
          </li>
          <li>
            {" "}
            <div
              className={`flex justify-between items-center cursor-pointer p-4 relative`}
            >
              <span>React States & Working with events</span>
              <span>
                <IoMdArrowDropdown
                  className={` ${
                    dropDown ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </span>
            </div>
          </li>
          <li>
            {" "}
            <div
              className={`flex justify-between items-center cursor-pointer p-4 relative`}
            >
              <span>Rendering listings</span>
              <span>
                <IoMdArrowDropdown
                  className={` ${
                    dropDown ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </span>
            </div>
          </li>
          <li>
            {" "}
            <div
              className={`flex justify-between items-center cursor-pointer p-4 relative`}
              onClick={handleDropDown}
            >
              <span>Styling React Components</span>
              <span>
                <IoMdArrowDropdown
                  className={` ${
                    dropDown ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </span>
            </div>
          </li>
          <li>
            {" "}
            <div
              className={`flex justify-between items-center cursor-pointer p-4 relative`}
            >
              <span>Debugging React Apps</span>
              <span>
                <IoMdArrowDropdown
                  className={` ${
                    dropDown ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </span>
            </div>
          </li>
          <li>
            {" "}
            <div
              className={`flex justify-between items-center cursor-pointer p-4 relative`}
            >
              <span>Practice : A complete project</span>
              <span>
                <IoMdArrowDropdown
                  className={` ${
                    dropDown ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </span>
            </div>
          </li>
          <li>
            {" "}
            <div
              className={`flex justify-between items-center cursor-pointer p-4 relative`}
            >
              <span>Diving Deeper</span>
              <span>
                <IoMdArrowDropdown
                  className={` ${
                    dropDown ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </span>
            </div>
          </li>
          <li>
            {" "}
            <div
              className={`flex justify-between items-center cursor-pointer p-4 relative`}
            >
              <span>Advance Topics</span>
              <span>
                <IoMdArrowDropdown
                  className={` ${
                    dropDown ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBarForCourseContent;
