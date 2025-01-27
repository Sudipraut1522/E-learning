import React from "react";
import InputField from "../components/InputField";
import { useForm } from "react-hook-form";
import GoPremium from "../components/GoPremium";
import CardInfo from "../components/CardInfo";
import OnGoingCourse from "../components/OnGoingCourse";
import Assignment from "../components/Assignment";
import Events from "../components/Events";

const Dashboard: React.FC = () => {
  const { register } = useForm({
    defaultValues: {
      search: "",
    },
  });

  return (
    <div className="flex flex-col lg:flex-row w-full bg-white min-h-screen relative px-8 ">
      {/* Main Content */}
      <div className="flex flex-col w-full lg:w-3/4 p-4 gap-4">
        {/* Header Section */}
        <div className="flex w-full flex-col md:flex-row justify-between gap-4 pt-10 md:pt-0">
          <div>
            <h1 className="text-blue-600 text-[24px] font-semibold">
              Hi Jake, Good Afternoon!
            </h1>
            <p className="text-gray-400 text-sm">
              Let's learn something new today
            </p>
          </div>
          <InputField
            name="searchVideo"
            register={register}
            type="search"
            placeHolder="Search"
            inputClassName="bg-gray-200 w-full md:w-[300px] lg:w-[400px] rounded-lg border-none"
          />
        </div>

        <div>
          <GoPremium />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-blue-600">Overview</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardInfo />
            <CardInfo />
            <CardInfo />
          </div>
        </div>

        {/* Ongoing Courses Section */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between text-blue-600 text-sm">
            <p>Counting Reading</p>
            <a href="#" className="hover:underline">
              View All
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(5)].map((_, index) => (
              <OnGoingCourse key={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 flex-col p-4 border-l border-gray-300 ">
        <div className="flex items-center justify-between gap-4 mb-4">
          <img
            src="src/assets/updayes.jpg"
            alt="User Avatar"
            className="h-8 w-8 rounded-full"
          />
          <div className="flex items-center gap-2">
            <img
              src="src/assets/rohit 2.jpg"
              alt="User Avatar"
              className="rounded-full h-8 w-8"
            />
            <p className="text-blue-600 text-sm">Sudip</p>
          </div>
        </div>

        {/* Reminders Section */}
        <div className="mb-6">
          <p className="text-sm text-blue-600 mb-2">Reminders</p>
          <div className="flex flex-col gap-2">
            <Assignment />
            <Assignment />
            <Assignment />
          </div>
        </div>

        {/* Events Section */}
        <div>
          <p className="text-sm text-blue-600 mb-2">Events</p>
          <div className="flex flex-col gap-2">
            <Events />
            <Events />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
