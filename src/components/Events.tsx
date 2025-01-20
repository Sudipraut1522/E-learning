import React from "react";

const Events: React.FC = () => {
  return (
    <div className="bg-blue-50 rounded-md p-6 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-sm">
          Effects of Internet on focus : Design for mindfulness
        </h2>
        <p className="text-xs text-gray-400">Hosted by Angela Longeria</p>
      </div>
      <div className="flex flex-col gap-1">
        <p>Meeting Attending</p>
        <img
          src="src/assets/Image-bundle.jpg"
          alt=""
          className="w-2/3 h-8      "
        />
      </div>
    </div>
  );
};

export default Events;
