import React, { useState } from "react";
import InputField from "../components/InputField";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import OnGoingCourse from "../components/OnGoingCourse";
const data = [
  {
    id: 1,
    course: "webdevelopment",
  },
  {
    id: 2,
    course: "Flutter",
  },
  {
    id: 2,
    course: "Node",
  },
];
const Search: React.FC = () => {
  const [search, setSearch] = useState(data);

  const { register, watch } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const searchQuery = watch("search");
  const searchCourse = search.filter((data) =>
    data.course.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  console.log(searchCourse, "data");

  return (
    <div>
      <header className="flex items-center justify-center bg-blue-50 h-[336px] fkex flex-col gap-6">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-semibold text-blue-600 text-[30px] md:text-[54px]">
            Finding course made easy
          </h1>
          <p className="text-gray-500 text-xs tracking-widest">
            Search. Explore. Learn
          </p>
        </div>
        <div>
          <InputField
            name="search"
            register={register}
            type="search"
            inputClassName="rounded-lg border-none p-2 w-full "
            placeHolder="search...."
          />
        </div>
      </header>
      <div className="md:max-w-[1100px] md:mx-auto flex flex-col gap-2">
        <h1 className="text-[24px] tracking-widest text-gray-600 ">
          Search Result for <span className="text-blue-600">React js</span>
        </h1>
        <ul className="flex gap-10 h-[40px] text-[18px] items-center text-gray-600 border-b border-gray-200">
          <NavLink to="" className="flex flex-col gap-1">
            <li>Course</li>
            <hr className="bg-blue-600 h-[1.5px] border-none hidden" />
          </NavLink>
          <NavLink to="" className="flex flex-col gap-1">
            <li>Slides</li>
            <hr className="bg-blue-600 h-[1.5px] border-none hidden" />
          </NavLink>
          <NavLink to="" className="flex flex-col gap-1">
            <li>learners</li>
            <hr className="bg-blue-600 h-[1.5px] border-none hidden " />
          </NavLink>
          <NavLink to="" className="flex flex-col gap-1">
            <li>Blogs</li>
            <hr className="bg-blue-600 h-[1.5px] border-none  hidden" />
          </NavLink>
        </ul>
        <div className="py-1 px-10 flex flex-col gap-4">
          {searchCourse?.map((data) => (
            <OnGoingCourse data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
