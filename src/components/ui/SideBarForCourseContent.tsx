import React, { useState } from "react";
import { FaCheckCircle, FaCogs, FaRegQuestionCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

type itemClicked = {
  onItemClick: (id: any) => void;
  lesson: [];
};
type ListItem = {
  id: number;
  icon: React.ComponentType<any>;
  iconColor: string;
  text: string;
};
const data: ListItem[] = [
  {
    id: 1,
    icon: FaCheckCircle,
    iconColor: "text-green-500",
    text: "Welcome to the course",
  },
  {
    id: 2,
    icon: FaRegQuestionCircle,
    iconColor: "text-blue-500",
    text: "What is React Js?",
  },
  {
    id: 3,
    icon: FaRegQuestionCircle,
    iconColor: "text-yellow-500",
    text: "Why React but Not js?",
  },
  {
    id: 4,
    icon: FaCogs,
    iconColor: "text-gray-500",
    text: "Setting Up Environment",
  },
];
const SideBarForCourseContent: React.FC<itemClicked> = ({
  onItemClick,
  lesson,
}) => {
  console.log(lesson);
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
                <ul className="flex flex-col gap-4 w-full p-6 text-gray-600 text-[14px] cursor-pointer  ">
                  {data.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className="flex items-center gap-2 py-2"
                        onClick={() => onItemClick(item.id)}
                      >
                        <item.icon className={item.iconColor} /> {item.text}
                        {}
                      </li>
                    );
                  })}
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
                <IoMdArrowDropdown />
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
                <IoMdArrowDropdown />
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
                <IoMdArrowDropdown />
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
                <IoMdArrowDropdown />
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
                <IoMdArrowDropdown />
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
                <IoMdArrowDropdown />
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
