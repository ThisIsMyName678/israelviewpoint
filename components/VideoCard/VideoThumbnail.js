import React, { useState } from "react";
import Image from "next/image";
import VideoPopup from "../VideoPopup"; // Import the VideoPopup component

const VideoThumbnail = ({ thumbnail, videoLink }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Define the handlePlayButtonClick function here
  const handlePlayButtonClick = () => {
    setIsPopupOpen(true);
  };

  // Define the handleThumbnailClick function to open the popup
  const handleThumbnailClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="image-container relative w-full h-48 overflow-hidden rounded-lg">
      <img
        src={thumbnail}
        alt="Video Thumbnail"
        className="w-full h-full object-cover border-4 border-white bg-blue-500 rounded-lg cursor-pointer"
        onClick={handleThumbnailClick}
      />
      <button
        id="popupButton"
        className="play-button popup-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        onClick={handlePlayButtonClick} // Add the onClick event handler
      >
        <Image
          src={"/images/play-button.svg"}
          className={"play-button"}
          width={"56"}
          height={"56"}
        />
      </button>

      {/* Conditionally render the VideoPopup component */}
      {isPopupOpen && (
        <VideoPopup videoId={videoLink} onClose={() => setIsPopupOpen(false)} />
      )}
    </div>
  );
};

export default VideoThumbnail;
