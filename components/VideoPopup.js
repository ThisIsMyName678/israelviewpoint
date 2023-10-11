import React from "react";
import VideoDetails from "./VideoCard/VideoDetails"; // Import the VideoDetails component

const VideoPopup = ({ videoId, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-75"></div>
      <div className="bg-white rounded-lg p-4 relative z-10">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <iframe
          width="560"
          height="315"
          src={`https://drive.google.com/file/d/${videoId}/preview`}
          title="Video"
          allowFullScreen
          frameBorder="0"
        ></iframe>

        {/* Add the VideoDetails component */}
        <VideoDetails name="Video Name" videoLink={videoId} />
      </div>
    </div>
  );
};

export default VideoPopup;
