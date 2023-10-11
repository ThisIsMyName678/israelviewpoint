// components/HeadingSection.js
import React, { useState } from "react";

const HeadingSection = () => {
  // Define dynamic select options
  const [languageOptions] = useState([
    { value: "all", label: "All" },
    { value: "hebrew", label: "Hebrew" },
    { value: "russian", label: "Russian" },
    { value: "english", label: "English" },
  ]);

  return (
    <div className="content-section py-4 md:py-6 lg:py-8 px-4 md:px-8 lg:px-16 flex justify-between items-center">
      <div className="video-text text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
        What's going on in Israel?
      </div>
      <div className="language-selection flex items-center gap-4 text-base md:text-lg lg:text-xl font-normal text-gray-600">
        <span>Choose your viewpoint's language</span>
        <div className="relative inline-block w-32">
          <select
            className="block w-full py-2 px-4 pr-12 leading-tight bg-white border border-gray-400 rounded-lg appearance-none focus:outline-none focus:border-purple-600 text-gray-600"
            defaultValue="all"
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingSection;
