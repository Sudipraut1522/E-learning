import React from "react";
import SideBarForCourseContent from "../components/ui/SideBarForCourseContent";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Button from "../components/Button";

const CourseStudyPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="flex w-full md:max-w-[363px] ">
        <SideBarForCourseContent />
      </div>
      <div className=" bg-white  flex-1">
        <div className="h-[96px] bg-white flex items-center justify-between px-8 ">
          <div className="flex items-center gap-6">
            <IoIosArrowDropleftCircle className="text-blue-400 h-7 w-8" />
            <p className="text-blue-600 text-xs">Welcome to the course</p>
          </div>
          <div className="flex gap-8">
            <Button
              buttonName="prev"
              className="text-xs p-2 py-2 text-white bg-blue-300 rounded-md "
            />
            <Button
              buttonName="Next"
              className="text-xs p-2 py-2 text-white bg-blue-300 rounded-md "
            />
            <Button
              buttonName="Mark as complete"
              className="text-xs p-2 py-2 text-gray-400 bg-[#F0FDF4] rounded-md "
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <img src="src/assets/rohit 2.jpg" alt="" />
            <p className="text-xs">Rohit Harper </p>
          </div>
        </div>

        <div className="bg-gray-200 h-full flex flex-col  items-center justify-center">
          <div className="flex flex-col gap-6 md:max-w-[600px]">
            <img src="src/assets/Player.jpg" alt="" />
            <div className="p-4 flex flex-col gap-2">
              <h1 className="font-semibold text-[24px]">
                Welcome to the course
              </h1>
              <p className="text-xs text-justify flex flex-col gap-7">
                <span>
                  Hi ! I am Thomas Wayne, your React.js Instructor for this
                  course. Let me tell you this, i am super happy to help you
                  understand the core basics and advance topics of React.
                </span>

                <span>
                  In this course, we will cover basic as well as advance topics,
                  a full-one guide, that will help you understand React
                  in-depth.
                </span>
                <span>
                  This will be a 4 hour course divided in 8 chapters and 36
                  lessons that includes articles, video lessons as well as
                  assignments to help you test yourself. Lets start now with out
                  getting any further late. lets dive in.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStudyPage;
