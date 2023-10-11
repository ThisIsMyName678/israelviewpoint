import React, { useState } from "react";
import SelectArrow from "../public/images/select-arrow.svg"; // Import the SVG
import Image from "next/image"; // Import the Image component from Next.js

const HeadingSection = () => {
  // Define dynamic select options
  const [languageOptions] = useState([
    { value: "all", label: "All" },
    { value: "hebrew", label: "Hebrew" },
    { value: "russian", label: "Russian" },
    { value: "english", label: "English" },
  ]);

  return (
    <div className="content-section py-3 md:py-6 lg:py-8 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center">
      <div className="video-text text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
        What's going on in Israel?
      </div>
      <div className="language-selection flex flex-col md:flex-row items-center gap-4 text-base md:text-lg lg:text-xl font-normal text-gray-600">
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
            {/* Use Next.js Image component for the select arrow */}
            <Image
              src={SelectArrow}
              alt="Select Arrow"
              width={20} // Set the width and height as needed
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingSection;
