import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaBook, FaHeart, FaFileAlt, FaStar } from "react-icons/fa";

const ProfilePage: React.FC = () => {
  return (
    <div className="w-full md:max-w-[1200px] md:mx-auto pt-6">
      <header className="h-[274px] w-full  flex px-6 justify-between items-center ">
        <div className="flex gap-4 items-center">
          <div className="[150px] w-[150px]">
            <img
              src="src/assets/rohit 2.jpg"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col   gap-4 ">
            <p>Jake Harper</p>
            <p className="flex gap-4">
              <span className="text-xs rounded-md bg-blue-50 p-1">Student</span>
              <span className="text-xs">jack@gail.com</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <div>
            <p>involvements</p>
            <p className="text-xs text-gray-400">CBO at Life partners</p>
          </div>
          <div>
            <p>Specialisation</p>
            <p className="text-xs text-gray-500">Bachelor of IT</p>
          </div>
        </div>
      </header>

      <section className="sm:max-w-[980px] sm:mx-auto w-full border-gray-100 border flex flex-col">
        <ul className="flex justify-between w-full p-2 text-[#516778] text-[14px]">
          <NavLink to="" className="flex flex-col gap-2">
            <li className="flex items-center gap-2 cursor-pointer">
              <FaUser className="text-blue-500" />
              <span>About Me</span>
            </li>
            <hr className="border-t-1 border border-blue-500" />
          </NavLink>
          <NavLink to="" className="flex flex-col gap-2">
            <li className="flex items-center gap-2 cursor-pointer">
              <FaBook className="text-green-500" />
              <span>Enrolled Course</span>
            </li>
            <hr className="border-t-1 border border-blue-500" />
          </NavLink>

          <li className="flex items-center gap-2 cursor-pointer">
            <FaHeart className="text-red-500" />
            <span>Saved Course</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <FaFileAlt className="text-purple-500" />
            <span>Save Slides</span>
          </li>
          <li className="flex items-center gap-2 cursor-pointer">
            <FaStar className="text-yellow-500" />
            <span>My Recommendation</span>
          </li>
        </ul>

        <section className="w-full sm:max-w-[700px] sm:mx-auto p-6 flex flex-col gap-6">
          <div className="rounded-md border border-gray-200 flex  justify-between items-center gap-8 p-6 ">
            <div className="flex flex-col gap-8">
              <p className="text-blue-600">Complete your Profile</p>
              <div className="flex justify-between gap-6">
                <hr className="border-t-1 border-2 border-gray-400 w-[100px]" />
                <hr className="border-t-1 border-2 border-gray-400 w-[100px]" />
                <hr className="border-t-1 border-2 border-gray-400 w-[100px]" />
              </div>
              <p className="text-xs text-gray-400">
                Please complete your profile (1/3)
              </p>
            </div>

            <div>akjsfkaj </div>
          </div>

          <div className="border-gray-200 rounded-md border flex flex-col gap-4 p-4">
            <h1 className="text-blue-500 font-semibold text-[12px]">About</h1>
            <p className="text-[14px] text-justify text-gray-600">
              Dynamic and motivated marketing professional with a proven record
              of generating and building relationships, managing projects from
              concept to completion, designing educational strategies, and
              coaching individuals to success. Skilled in building
              cross-functional teams, demonstrating exceptional communication
              skills, and making critical decisions during challenges. Adaptable
              and transformational leader with an ability to work independently,
              creating effective presentations, and developing opportunities
              that further establish organizational goals.
            </p>
          </div>
          <div className="border-gray-200 border rounded-md p-4 gap-4 flex flex-col">
            <h3 className="font-semibold text-blue-600 text-[12px]">Skills</h3>

            <ul className="flex justify-between text-xs text-gray-600">
              <li>Figma</li>
              <li>Javascript</li>
              <li>Adobd XD</li>
              <li>React js</li>
            </ul>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ProfilePage;
