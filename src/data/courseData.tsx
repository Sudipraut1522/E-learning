import { FaReact, FaLaptopCode, FaPlay, FaTools } from "react-icons/fa";

import { IconType } from "react-icons";

export type CourseData = {
  id: number;
  videoUrl: String;
  title: string;
  description: string;
  completed: boolean;
  icon: IconType;
};

export const contentData: CourseData[] = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
    title: "Welcome to the course",
    description:
      "Hi! I am Thomas Wayne, your React.js Instructor for this course...",
    completed: false,
    icon: FaPlay,
  },
  {
    id: 2,
    videoUrl: "https://youtu.be/QFaFIcGhPoM?si=HcaEn3DfLF2bkTv3",
    title: "What is React Js?",
    description:
      "React is a powerful JavaScript library for building user interfaces...",
    completed: false,
    icon: FaReact,
  },
  {
    id: 3,
    videoUrl: "https://youtu.be/QFaFIcGhPoM?si=HcaEn3DfLF2bkTv3",
    title: "Why React but Not JS?",
    description:
      "JavaScript is essential, but React provides a structured framework...",
    completed: false,
    icon: FaLaptopCode,
  },
  {
    id: 4,
    videoUrl: "https://youtu.be/QFaFIcGhPoM?si=HcaEn3DfLF2bkTv3",
    title: "Setting Up Environment",
    description:
      "Setting up your development environment is crucial for React...",
    completed: false,
    icon: FaTools,
  },
];
