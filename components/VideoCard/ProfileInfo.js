// components/VideoCard/ProfileInfo.js
import React from "react";
import Image from "next/image";

const ProfileInfo = () => {
  return (
    <div className="profile-container flex justify-between items-center mt-2">
      <div className="profile flex items-center">
        <img
          src="Profile.png"
          alt="Profile Image"
          className="w-7 h-7 rounded-full"
        />
        <span className="text-base text-gray-600">John Doe</span>
      </div>
      <div className="buttons flex gap-2">
        <button
          className="btn bg-transparent border-none rounded-full p-2 hover:bg-gray-200 transition-colors duration-300"
          onClick={() => handleButtonClick(video.videoLink)}
        >
          <Image src="/images/Download.svg" alt="Logo" width={24} height={24} />
        </button>
        <button
          className="btn bg-transparent border-none rounded-full p-2 hover:bg-gray-200 transition-colors duration-300"
          onClick={() => handleButtonClick(video.videoLink)}
        >
          <Image src="/images/Share.svg" alt="Logo" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
