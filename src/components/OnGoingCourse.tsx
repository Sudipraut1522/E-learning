import React from "react";

type courseType = {
  id: number;
  course: string;
};

const OnGoingCourse: React.FC<courseType> = ({ data }) => {
  return (
    <div className="bg-blue-50 flex p-2 gap-2 rounded-md">
      <div>
        <img src="src/assets/course 1.jpg" alt="" className="object-fill" />
      </div>
      <div className="flex flex-col text-xs text-gray-400 items-center justify-between">
        <p>{data?.course}</p>
        <p>Swift course</p>
        <p>Esther Howard</p>
      </div>
    </div>
  );
};

export default OnGoingCourse;
