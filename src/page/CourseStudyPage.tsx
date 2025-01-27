import React, { useState } from "react";
import SideBarForCourseContent from "../components/ui/SideBarForCourseContent";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Button from "../components/Button";
import { contentData, CourseData } from "../data/courseData";
import { NavLink } from "react-router-dom";

const CourseStudyPage: React.FC = () => {
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [lessons, setLesson] = useState<CourseData[]>(contentData);

  const currentContent = lessons[selectIndex];

  const handlePreviousState = () => {
    if (selectIndex > 0) {
      setSelectIndex(selectIndex - 1);
    }
  };
  const handleNext = () => {
    if (selectIndex < lessons.length - 1) {
      setSelectIndex(selectIndex + 1);
    }
  };

  const markAsComplete = () => {
    const updatedLessons = lessons.map((lesson, index) =>
      index === selectIndex
        ? { ...lesson, completed: !lesson.completed }
        : lesson
    );
    setLesson(updatedLessons);
  };

  const descriptionFirst = currentContent.description.slice(0, 200);
  const descriptionSecond = currentContent.description.slice(200, 300);

  return (
    <div className="w-full flex flex-col md:flex-row h-screen">
      <div className="flex w-full md:max-w-[363px] h-auto ">
        <SideBarForCourseContent
          onItemClick={(id) => setSelectIndex(id - 1)}
          lesson={lessons}
        />
      </div>

      <div className="bg-gray-200 md:flex-1  ">
        <div className="h-[96px] bg-white flex items-center md:px-12 justify-between px-4">
          <div className=" hidden md:flex items-center md:gap-6">
            <IoIosArrowDropleftCircle
              className="text-blue-400 h-7 w-8"
              onClick={handlePreviousState}
            />
            <p className="text-blue-600 text-xs">{currentContent.title}</p>
          </div>
          <div className="flex gap-4 md:gap-8">
            <Button
              onClick={handlePreviousState}
              buttonName="Prev"
              className="text-xs p-2 py-2 text-white bg-blue-300 rounded-md"
            />
            <Button
              onClick={handleNext}
              buttonName="Next"
              className="text-xs p-2 py-2 text-white bg-blue-300 rounded-md"
            />
            <Button
              onClick={markAsComplete}
              buttonName={
                currentContent.completed
                  ? "Mark as Incomplete"
                  : "Mark as Complete"
              }
              className={`text-xs p-2 py-2 rounded-md ${
                currentContent.completed
                  ? "bg-red-300 text-white"
                  : "bg-[#F0FDF4] text-gray-400"
              }`}
            />
          </div>
          <NavLink to="/profile">
            <div className="flex justify-center items-center gap-4">
              <img
                src="src/assets/rohit 2.jpg"
                alt="Instructor"
                className="w-10 h-10 rounded-full"
              />
              <p className="text-xs hidden md:block">Rohit Harper</p>
            </div>
          </NavLink>
        </div>

        <div className=" flex flex-col items-center justify-center h-screen bg-gray-200 p-6">
          <div className="flex flex-col gap-2 md:max-w-[900px] md:mx-auto w-full h-full justify-center items-center">
            <div className=" w-full justify-center items-center h-[800px]  pt-16">
              <iframe
                className="h-full w-full object-fill"
                loading="lazy"
                src={currentContent.videoUrl}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div className=" flex flex-col gap-2">
              <h1 className="font-semibold text-[24px]">
                {currentContent.title}
              </h1>
              <p className="text-xs text-justify flex flex-col gap-4">
                <span>{descriptionFirst}</span>
                <span>{descriptionSecond}</span>
                <span className="text-black">
                  This will be a 4-hour course divided into 8 chapters and 36
                  lessons that include articles, video lessons, as well as
                  assignments to help you test yourself. Let's start now without
                  getting any further delay. Let's dive in Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quae reiciendis optio
                  architecto ipsa eveniet nulla non voluptatem debitis itaque,
                  veritatis quam fuga alias possimus deserunt provident tenetur
                  placeat voluptates culpa. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Dolores velit expedita minima
                  non, dolorum soluta, distinctio optio iste fugiat quibusdam ut
                  culpa reprehenderit dolorem, possimus saepe alias. Excepturi,
                  facere sequi. Sit reprehenderit ea perspiciatis odit delectus
                  minima nulla. Tempora temporibus non saepe provident, id
                  illum, culpa perspiciatis recusandae dignissimos deserunt
                  eligendi nihil sapiente aliquam autem ea officia sed esse
                  maiores!
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
