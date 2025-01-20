import React from "react";
import InputField from "../components/InputField";
import { useForm } from "react-hook-form";

const Search: React.FC = () => {
  const { register } = useForm({});
  return (
    <div>
      <header className="flex items-center justify-center bg-blue-50 sm:h-[336px] fkex flex-col gap-6">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-semibold text-blue-600 text-[54px]">
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
            inputClassName="rounded-lg border-none p-2"
            placeHolder="search...."
          />
        </div>
      </header>
      <div className="md:max-w-[1100px] md:mx-auto">
        <h1 className="text-[20px] tracking-widest text-gray-600">
          Search Result for <span className="text-blue-600">React js</span>
        </h1>
        <ul className="flex gap-10 h-[40px] text-[14px] items-center text-gray-600 border border-gray-200">
          <li>Course</li>
          <li>Slides</li>
          <li>learners</li>
          <li>Blogs</li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
