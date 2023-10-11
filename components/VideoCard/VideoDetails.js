// components/VideoCard/VideoDetails.js
import React from "react";
import Image from "next/image";

const VideoDetails = () => {
  return (
    <div className="truncate flex justify-between items-center mt-2">
      <h3 className="font-semibold text-xl text-gray-900">Video name</h3>
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

export default VideoDetails;
