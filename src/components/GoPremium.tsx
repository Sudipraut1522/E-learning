import React from "react";
import Button from "./Button";

const GoPremium: React.FC = () => {
  return (
    <div className="h-[227px]  rounded-md shadow-md flex flex-col items-center w-full gap-4  bg-blue-100 p-2">
      <h1 className="text-blue-600 font-semibold">Go Premium</h1>
      <p className="text-center text-gray-400">
        Explore 100+ expert curated courses prepared for you.
      </p>
      <div className="b-0 pt-10">
        <Button
          buttonName="Get Access"
          className="bg-white text-blue-600 text-center rounded-lg"
        />
      </div>
    </div>
  );
};

export default GoPremium;
