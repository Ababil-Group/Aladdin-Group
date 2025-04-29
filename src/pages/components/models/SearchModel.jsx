import React, { useState } from "react";

const SearchModel = ({ setSearchOpen }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div
      className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <div className="absolute left-1/2 top-10 -translate-x-1/2 max-w-screen-lg rounded-lg bg-blue-seondary shadow-lg">
        <div className="flex items-center justify-between gap-4 bg-blue-dark rounded-t-lg text-white px-4 py-2">
          <h2
            id="modalTitle"
            className="text-lg font-semibold text-white sm:text-xl tracking-wider"
          >
            Universities, Courses and Scholarship
          </h2>

          <button
            onClick={() => setSearchOpen(false)}
            type="button"
            className="rounded-full p-2 text-lg sm:text-xl text-white transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="pt-6">
          <div className="flex space-x-0.5">
            <button
              className={`p-3 text-center text-sm sm:text-[16px] font-medium bg-red-primary rounded-t-lg ${
                activeTab === "tab1"
                  ? "bg-white text-gray-900"
                  : "text-white hover:text-white/90"
              }`}
              onClick={() => setActiveTab("tab1")}
            >
              Course Search
            </button>
            <button
              className={`p-3 text-center text-sm sm:text-[16px] font-medium bg-red-primary rounded-t-lg ${
                activeTab === "tab2"
                  ? "bg-white text-gray-900"
                  : "text-white hover:text-white/90"
              }`}
              onClick={() => setActiveTab("tab2")}
            >
              University Search
            </button>
            <button
              className={`p-3 text-center text-sm sm:text-[16px] font-medium bg-red-primary rounded-t-lg ${
                activeTab === "tab3"
                  ? "bg-white text-gray-900"
                  : "text-white hover:text-white/90"
              }`}
              onClick={() => setActiveTab("tab3")}
            >
              Scholarship Search
            </button>
            <button
              className={`p-3 text-center text-sm sm:text-[16px] font-medium bg-red-primary rounded-t-lg ${
                activeTab === "tab4"
                  ? "bg-white text-gray-900"
                  : "text-white hover:text-white/90"
              }`}
              onClick={() => setActiveTab("tab4")}
            >
              Web Site Search
            </button>
          </div>

          {/* Tabs Content */}
          <div className="max-w-screen-lg ">
            {activeTab === "tab1" && (
              <div className="w-full md:flex items-center gap-4 space-y-2 bg-white font-poppins p-4">
                <div>
                  <label htmlFor="" className="sr-only">
                    Select study level
                  </label>
                  <select
                    name=""
                    id=""
                    className="border border-gray-200 rounded-md h-12 w-full md:w-90 px-2 text-lg py-1  text-black focus:outline-none"
                  >
                    <option className="px-4">Select study level</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="postgraduate">Postgraduate</option>
                    <option value="Bachelors">Bachelor's</option>
                    <option value="masters">Master's </option>
                  </select>
                </div>
                <div className="">
                  <input
                    type="text"
                    className="border border-gray-200 rounded-md h-12 w-full md:w-90 px-2 text-lg py-1 text-black focus:outline-none"
                    placeholder="search here..."
                  />
                </div>
                <button className="bg-blue-dark text-white font-medium text-[17px] h-12 px-6 cursor-pointer hover:scale-105 transition-transform duration-500">
                  Search
                </button>
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="w-full md:flex items-center gap-4 space-y-2 bg-white font-poppins p-4">
                <div className="">
                  <input
                    type="text"
                    className="border border-gray-200 rounded-md h-12 w-full md:w-[730px] px-2 text-lg py-1 text-black focus:outline-none"
                    placeholder="search here..."
                  />
                </div>
                <button className="bg-blue-dark text-white font-medium text-[17px] h-12 px-6 cursor-pointer hover:scale-105 transition-transform duration-500">
                  Search
                </button>
              </div>
            )}
            {activeTab === "tab3" && (
              <div className="w-full md:flex items-center gap-4 space-y-2 bg-white font-poppins p-4">
                <div className="">
                  <input
                    type="text"
                    className="border border-gray-200 rounded-md h-12 w-full md:w-[730px] px-2 text-lg py-1 text-black focus:outline-none"
                    placeholder="search here..."
                  />
                </div>
                <button className="bg-blue-dark text-white font-medium text-[17px] h-12 px-6 cursor-pointer hover:scale-105 transition-transform duration-500">
                  Search
                </button>
              </div>
            )}
            {activeTab === "tab4" && (
              <div className="w-full md:flex items-center gap-4 space-y-2 bg-white font-poppins p-4">
                <div className="">
                  <input
                    type="text"
                    className="border border-gray-200 rounded-md h-12 w-full md:w-[730px] px-2 text-lg py-1 text-black focus:outline-none"
                    placeholder="search here..."
                  />
                </div>
                <button className="bg-blue-dark text-white font-medium text-[17px] h-12 px-6 cursor-pointer hover:scale-105 transition-transform duration-500">
                  Search
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModel;
