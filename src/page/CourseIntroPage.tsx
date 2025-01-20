import React from "react";
import Button from "../components/Button";
import { FaUserGraduate } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";

const CourseIntroPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="bg-blue-50 sm:h-[478px] h-auto">
        <div className="w-full sm:max-w-[1000px] sm:mx-auto pt-10 px-4">
          <div className="flex md:justify-between w-full gap-12 items-center pt-10 flex-col md:flex-row">
            <div className="md:max-w-[500px] gap-2 flex flex-col text-center md:text-left">
              <p className="text-xs text-blue-600 rounded-lg bg-blue-100 p-1 w-[120px] mx-auto md:mx-0">
                Web Development
              </p>
              <h1 className="text-[24px] md:text-[30px] font-semibold text-blue-600">
                Zero to Hero in React Js with Thomas Wayne
              </h1>
              <p className="text-xs text-gray-500">
                Dive in and learn React.js from scratch! Learn Reactjs, Hooks,
                Redux, React Routing, Animations, Next.js, and way more!
              </p>

              <div className="flex text-[12px] gap-6 justify-between text-gray-500 pt-4 flex-wrap">
                <p className="flex items-center gap-1">
                  <FaUserGraduate /> 745,123 Students
                </p>
                <p className="flex items-center gap-1">
                  <MdAccessTime /> 6 hr
                </p>
                <p className="flex items-center gap-1">
                  <AiOutlineCalendar /> Last Updated on 23 May, 2023
                </p>
              </div>

              <div className="flex justify-center md:justify-start pt-4">
                <Button
                  buttonName="Enroll Now"
                  className="bg-blue-600 text-white rounded-lg text-xs px-4 py-2"
                />
              </div>
            </div>

            <div className="w-full md:w-[400px]">
              <img
                src="src/assets/right.jpg"
                alt="React Course"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full sm:max-w-[1000px] sm:mx-auto px-4">
        <ul className="flex gap-8 text-gray-500 text-xs border-b p-2 overflow-x-auto">
          <li className="cursor-pointer hover:text-blue-600">About</li>
          <li className="cursor-pointer hover:text-blue-600">Course Content</li>
          <li className="cursor-pointer hover:text-blue-600">
            What is included
          </li>
          <li className="cursor-pointer hover:text-blue-600">Reviews</li>
        </ul>

        <div className="p-6 flex flex-col gap-6">
          <h1 className="font-semibold">Description</h1>

          <p className="text-xs text-justify text-gray-600">
            {" "}
            This course is fully up-to-date with React 18 (the latest version of
            React)! It was completely updated and re-recorded from the ground up
            - it teaches the very latest version of React with all the core,
            modern features you need to know! --- This course also comes with
            two paths which you can take: The "complete" path (full 40h course)
            and the "summary" path (~4h summary module) - you can choose the
            path that best fits your time requirements! :- --- React.js is THE
            most popular JavaScript library you can use and learn these days to
            build modern, reactive user interfaces for the web. This course
            teaches you React in-depth, from the ground up, step by step by
            diving into all the core basics, exploring tons of examples and also
            introducing you to advanced concepts as well. You'll get all the
            theory, tons of examples and demos, assignments and exercises and
            tons of important knowledge that is skipped by most other resources
            - after all, there is a reason why this course is that huge! : And
            in case you don't even know why you would want to learn React and
            you're just here because of some ad or "the algorithm" - no worries:
            ReactJS is a key technology as a web developer and in this course I
            will also explain WHY it's that important!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseIntroPage;
