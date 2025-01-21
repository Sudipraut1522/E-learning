import React, { useState } from "react";
import SideBarForCourseContent from "../components/ui/SideBarForCourseContent";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Button from "../components/Button";

type CourseData = {
  id: number;
  videoUrl: String;
  title: string;
  description: string;
  completed: boolean;
};

const contentData: CourseData[] = [
  {
    id: 1,
    videoUrl: "https://youtu.be/QFaFIcGhPoM?si=HcaEn3DfLF2bkTv3",
    title: "Welcome to the course",
    description:
      "Hi! I am Thomas Wayne, your React.js Instructor for this course...",
    completed: false,
  },
  {
    id: 2,
    videoUrl: "https://youtu.be/QFaFIcGhPoM?si=HcaEn3DfLF2bkTv3",
    title: "What is React Js?",
    description:
      "React is a powerful JavaScript library for building user interfaces...",
    completed: false,
  },
  {
    id: 3,
    videoUrl: "https://youtu.be/QFaFIcGhPoM?si=HcaEn3DfLF2bkTv3",
    title: "Why React but Not JS?",
    description:
      "JavaScript is essential, but React provides a structured framework...",
    completed: false,
  },
  {
    id: 4,
    videoUrl: "https://youtu.be/QFaFIcGhPoM?si=HcaEn3DfLF2bkTv3",
    title: "Setting Up Environment",
    description:
      "Setting up your development environment is crucial for React...",
    completed: false,
  },
];

const CourseStudyPage: React.FC = () => {
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [lessons, setLesson] = useState<CourseData[]>(contentData);

  const currentContent = contentData[selectIndex];

  const handlePreviousState = () => {
    if (selectIndex > 0) {
      setSelectIndex(selectIndex - 1);
    }
  };
  const handleNext = () => {
    if (selectIndex < contentData.length - 1) {
      setSelectIndex(selectIndex + 1);
    }
  };

  const markAsComplete = () => {
    const updatedLesson = lessons.map((lesson) => {
      lesson.id === currentContent.id
        ? { ...lesson, completed: !lesson.completed }
        : lesson;
    });
    setLesson(updatedLesson);
  };

  const descriptionFirst = currentContent.description.slice(0, 200);
  const descriptionSecond = currentContent.description.slice(200, 300);

  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="flex w-full md:max-w-[363px] ">
        <SideBarForCourseContent
          onItemClick={(id) => setSelectIndex(id - 1)}
          lesson={lessons}
        />
      </div>
      <div className=" bg-white  flex-1">
        <div className="h-[96px] bg-white flex items-center justify-between px-8 ">
          <div className="flex items-center gap-6">
            <IoIosArrowDropleftCircle className="text-blue-400 h-7 w-8" />
            <p className="text-blue-600 text-xs">Welcome to the course</p>
          </div>
          <div className="flex gap-8">
            <Button
              onClick={handlePreviousState}
              buttonName="prev"
              className="text-xs p-2 py-2 text-white bg-blue-300 rounded-md "
            />
            <Button
              onClick={handleNext}
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
            <iframe
              width="420"
              height="315"
              src={currentContent?.videoUrl}
              title={currentContent?.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4 flex flex-col gap-2">
              <h1 className="font-semibold text-[24px]">
                Welcome to the course
              </h1>
              <p className="text-xs text-justify flex flex-col gap-7">
                <span>{descriptionFirst}</span>

                <span>{descriptionSecond}</span>
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
