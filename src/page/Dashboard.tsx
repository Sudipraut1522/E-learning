import React from "react";
import SideNavForDashboard from "../components/ui/SideNavForDashboard";
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
    <div className="flex bg-white ">
      <div className="flex h-[52px]  w-full md:max-w-[1097px] p-4 flex-col gap-4">
        <div className="flex justify-between w-full">
          <div className="flex flex-col">
            <h1 className="text-blue-600 text-[24px] font-semibold">
              Hi Jake, Good Afternoon !
            </h1>
            <p className="text-gray-400 text-xs">
              Lets learn something new today
            </p>
          </div>
          <InputField
            name="searchVideo"
            register={register}
            type="search"
            placeHolder="search"
            inputClassName="bg-gray-200 w-[400px] rounded-lg border-none"
          />
        </div>
        <div className="w-full h-[230px]    ">
          <GoPremium />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-blue-600">OverView</h1>

          <div className="grid ms:grid-cols-2 lg:grid-cols-3 gap-6 md:w-2/3 w-full">
            <CardInfo />
            <CardInfo />
            <CardInfo />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between text-blue-600 text-xs">
            <p>Counting Reading</p>
            <a href="">ViewAll</a>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <OnGoingCourse />
            <OnGoingCourse />
            <OnGoingCourse />
            <OnGoingCourse />
          </div>
        </div>
      </div>
      <div className="flex flex-1  flex-col border border-gray-300  gap-4 ">
        <div className="items-center h-[114px] justify-between w-full flex p-4 border border-gray-300">
          <img
            src="src/assets/updayes.jpg"
            alt="dasgd"
            className="h-8 w-8 rounded-full cursor-pointer"
          />

          <div className="flex items-center gap-2">
            <img
              src="src/assets/updayes.jpg
        "
              alt=""
              className="rounded-full h-8 w-8"
            />
            <p className="text-blue-600 text-xs">Sudip</p>
          </div>
        </div>
        <div className="p-2">
          <p className=" text-xs text-blue-600">Remainders</p>
          <div className="p-1 flex flex-col gap-2">
            <Assignment />
            <Assignment />
            <Assignment />
          </div>
          <p className="text-xs text-blue-600">Events</p>

          <div className="p- flex flex-col gap-2">
            <Events />
            <Events />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
