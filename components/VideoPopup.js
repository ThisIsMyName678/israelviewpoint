import React, { useRef, useEffect } from "react";
import VideoDetails from "./VideoCard/VideoDetails";

const VideoPopup = ({ videoId, onClose }) => {
  const popupRef = useRef(null);

  // Close the popup when clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-75"></div>

      <div
        className="bg-white rounded-lg p-4 relative z-10"
        ref={popupRef}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <button
          className="absolute top-[-20px] right-0 mt-[-20px] mr-[-20px] text-gray-500 hover:text-gray-700"
          style={{ zIndex: 1000 }}
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              d="M31.5 10.5L10.5 31.5M10.5 10.5L31.5 31.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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

        <VideoDetails name="Video Name" videoLink={videoId} />
      </div>
    </div>
  );
};

export default VideoPopup;
