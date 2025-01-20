import React from "react";
import Button from "../components/Button";
import { FaHome } from "react-icons/fa";
import VideoType from "../components/ui/VideoType";
import FeaturedWithInstruction from "../components/ui/FeaturedWithInstruction";
import { VideoDataType, videoTypeData } from "../videoTypeData";
import Footers from "../components/ui/Footer";
import { NavLink } from "react-router-dom";
const Home: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 h-auto">
        <div className="h-[492px] w-full items-center flex justify-center bg-[#EFF4FF] border border-t-1">
          <div className=" flex justify-center items-center flex-col gap-8 h-[292px] md:mx-auto md:max-w-[776px]">
            <h1 className="md:text-[54px] text-[24px] text-center text-[#2563EB] font-bold">
              Discover best classes for the best learning
            </h1>
            <p className="text-[#656565] text-center">
              Online learning and teaching marketplace with 5K+ courses & 10M
              students. Taught by experts to help you acquire new skills.
            </p>

            <div className="flex gap-4">
              <NavLink to="coursestudy">
                <Button
                  buttonName="ViewCourse"
                  className="rounded-md bg-white text-blue-500"
                  type="button"
                />
              </NavLink>
              <a href="#toplistCourse">
                <Button
                  buttonName="Watch Video"
                  className="text-[#2563EB]"
                  type="button"
                  icon={<FaHome />}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="md:py-20">
          <div className="sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1288px] sm:mx-auto w-full">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 grid-rows-2">
              <div className="w-full md:max-w-[416px] h-auto md:h-[245px]">
                <h1 className="md:text-[54px] text-[30px] font-bold text-center">
                  Why choose our classes
                </h1>
                <p className="text-sm text-[#656565]">
                  Comfort reached gay perhaps chamber his six detract besides
                  add. Moonlight newspaper up its enjoyment agreeable depending.
                </p>
              </div>

              {videoTypeData?.map((type: VideoDataType, index: any) => (
                <div key={index}>
                  <VideoType
                    description={type.description}
                    heading={type.heading}
                    image={type.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white w-full py-10">
          <div className="w-full md:max-w-[1330px] md:mx-auto text-center">
            <h2 className="md:text-[54px] text-[24px] font-bold mb-4">
              Featured Courses With Their Instructors
            </h2>
            <p className="text-sm text-[#656565] mb-6">
              Space is limited. Reserve your spot today!
            </p>

            <div className="grid lg:grid-cols-5 gird-rows-3 gap-4 sm:grid-cols-3 ">
              {Array.from({ length: 15 }).map((_, index) => (
                <div key={index}>
                  <FeaturedWithInstruction />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="min-h-[821px] w-full flex justify-center items-center bg-[#EFF4FF]"
          id="toplistCourse"
        >
          <div className="md:max-w-[1330px] md:mx-auto w-full">
            <div className="flex flex-col gap-4 justify-center items-center sm:pt-20">
              <h1
                className="md:text-[54px] font-[700] text-blue-500 text-[24px]"
                role="heading"
              >
                Top Listed Course
              </h1>
              <p className="text-center text-xs text-gray-400">
                Space is limited. Reserve your spot today!
              </p>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 pt-6 gap-2">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <FeaturedWithInstruction key={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </div>
  );
};

export default Home;
