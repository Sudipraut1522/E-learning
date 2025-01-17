import React from "react";

export type VideoType = {
  heading: string;
  description: string;
  image: string;
};

const VideoType: React.FC<VideoType> = ({ image, heading, description }) => {
  return (
    <div className="flex flex-col w-full h-[215px] bg-[#EFF4FF]  gap-6 border-none rounded-md p-4">
      <img src={image} alt="" className="bg-blue-600 h-8 w-8" />
      <h1 className="md:font-[700] text-[24px] text-blue-600">{heading}</h1>
      <p className="text-[#656565] text-sm">{description}</p>
    </div>
  );
};

export default VideoType;
