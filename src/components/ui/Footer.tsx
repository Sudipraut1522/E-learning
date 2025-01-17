import React from "react";

const Footers: React.FC = () => {
  return (
    <footer className="w-full h-auto bg-blue-600 text-white flex flex-col">
      <div className="flex justify-center items-center w-full py-14">
        <div className="w-full md:max-w-[1231px] md:mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <h2 className="md:text-[54px] text-[30px] font-bold">Braimy.</h2>
              <p className="text-sm text-gray-200">Learning Reinvented</p>
            </div>
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div key={index}>
                  <h2 className="text-lg font-bold">Company</h2>
                  <ul className="space-y-2 text-xs">
                    <li className="cursor-pointer hover:underline">About Us</li>
                    <li className="cursor-pointer hover:underline">
                      Contact Us
                    </li>
                    <li className="cursor-pointer hover:underline">
                      News and Press
                    </li>
                    <li className="cursor-pointer hover:underline">Library</li>
                    <li className="cursor-pointer hover:underline">Career</li>
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </div>
      <hr className="border-gray-400 w-full" />
      <div className="text-center py-4">
        <p className="text-sm">© 2025 Braimy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footers;
