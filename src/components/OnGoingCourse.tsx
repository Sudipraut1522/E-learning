import React from "react";

const OnGoingCourse: React.FC = () => {
  return (
    <div className="bg-blue-50 flex p-2 gap-2 rounded-md">
      <img
        src="src/assets/course 1.jpg"
        alt=""
        className="h-[100px] w-[177px]"
      />
      <div className="flex flex-col text-xs text-gray-400 items-center justify-between">
        <p>WebDevelopment</p>
        <p>Swift course</p>
        <p>Esther Howard</p>
      </div>
    </div>
  );
};

export default OnGoingCourse;
