import React, { useState } from "react";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { CourseData } from "../../data/courseData";

type ItemClicked = {
  onItemClick: (id: number) => void;
  lesson: CourseData[];
};

const SideBarForCourseContent: React.FC<ItemClicked> = ({
  onItemClick,
  lesson,
}) => {
  const [dropDown, setDropDown] = useState(true);
  const [isMobileVisible, setIsMobileVisible] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  const toggleMobileSidebar = () => {
    setIsMobileVisible((prev) => !prev);
  };

  const closeMobileSlider = () => {
    setIsMobileVisible(false);
  };
  return (
    <>
      <div className="md:hidden fixed top-7 left-2 z-10">
        <button
          onClick={toggleMobileSidebar}
          className="text-blue-600 text-xl p-2"
        >
          ☰
        </button>
      </div>

      <div
        className={`fixed md:static  top-0 left-0   z-40 transform ${
          isMobileVisible ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 w-[300px] md:w-[400px]`}
      >
        <aside className=" bg-white text-[16px] border border-gray-100 fixed top-0 ">
          <div className="w-auto flex flex-col border border-gray-100">
            <h1 className="border border-gray-100 h-[96px] flex items-center px-6 w-full">
              Course Content
            </h1>
            <ul className="flex flex-col gap-3">
              <li>
                <div className="border border-gray">
                  <div
                    className="flex justify-between items-center cursor-pointer p-4 relative"
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
                    <ul className="flex flex-col gap-4 w-full p-6 text-gray-600 text-[14px] cursor-pointer">
                      {lesson.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-center gap-2 py-2"
                          onClick={() => onItemClick(item.id)}
                        >
                          <div
                            className="flex items-center gap-2 "
                            onClick={closeMobileSlider}
                          >
                            {<item.icon />}
                            {item.title}

                            {item.completed ? (
                              <FaCheckCircle className="text-green-500" />
                            ) : (
                              <FaRegCircle className="text-gray-400" />
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center cursor-pointer p-4 relative">
                  <span>JavaScript refresher</span>
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </div>
              </li>
              <li>
                <div
                  className="flex justify-between items-center cursor-pointer p-4 relative"
                  onClick={closeMobileSlider}
                >
                  <span>React Basics & Working with Components</span>
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </div>
              </li>
              <li>
                <div
                  className="flex justify-between items-center cursor-pointer p-4 relative"
                  onClick={closeMobileSlider}
                >
                  <span>React States & Working with events</span>
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center cursor-pointer p-4 relative">
                  <span>Rendering listings</span>
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </div>
              </li>
              <li>
                <div
                  className="flex justify-between items-center cursor-pointer p-4 relative"
                  onClick={closeMobileSlider}
                >
                  <span>Styling React Components</span>
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </div>
              </li>
              <li>
                <div
                  className="flex justify-between items-center cursor-pointer p-4 relative"
                  onClick={closeMobileSlider}
                >
                  <span>Debugging React Apps</span>
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </div>
              </li>
              <li>
                <div
                  className="flex justify-between items-center cursor-pointer p-4 relative"
                  onClick={closeMobileSlider}
                >
                  <span>Practice : A complete project</span>
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </div>
              </li>
              <li>
                <div className="flex justify-between items-center cursor-pointer p-4 relative">
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
                <div className="flex justify-between items-center cursor-pointer p-4 relative">
                  <span>Advance Topics</span>
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <button
            onClick={closeMobileSlider}
            className="absolute top-4 right-4 text-gray-500 md:hidden"
          >
            ✖
          </button>
        </aside>
      </div>
    </>
  );
};

export default SideBarForCourseContent;
