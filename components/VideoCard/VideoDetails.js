import React from "react";
import Image from "next/image";

const VideoDetails = ({ name, videoLink }) => {
  // Define the handleButtonClick function here
  const handleButtonClick = (videoLink) => {
    console.log(videoLink);
    // Implement your button click logic here using the videoLink prop

    const URL = `https://drive.google.com/uc?export=download&id=${videoLink}`;

    // Create a temporary anchor element to trigger the download
    const a = document.createElement("a");
    a.href = URL; // Use the provided videoLink directly
    a.download = "video.mp4"; // The name for the downloaded file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="truncate flex justify-between items-center mt-2">
      <h3 className="font-semibold text-xl text-gray-900">{name}</h3>
      <div className="buttons flex gap-2">
        <button
          className="btn bg-transparent border-none rounded-full p-2 hover:bg-gray-200 transition-colors duration-300"
          onClick={() => handleButtonClick(videoLink)}
        >
          <Image
            src="/images/Download.svg"
            alt="Download"
            width={24}
            height={24}
          />
        </button>
        <button
          className="btn bg-transparent border-none rounded-full p-2 hover:bg-gray-200 transition-colors duration-300"
          // onClick={() => handleButtonClick(videoLink)}
        >
          <Image src="/images/Share.svg" alt="Share" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default VideoDetails;
