// components/VideoCard/VideoThumbnail.js
import React from "react";

const VideoThumbnail = ({ thumbnail, videoLink }) => {
  return (
    <div className="image-container relative w-full h-48 overflow-hidden rounded-lg">
      <a href={videoLink} target="_blank" rel="noopener noreferrer">
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          className="w-full h-full object-cover border-4 border-white bg-blue-500 rounded-lg"
        />
      </a>
      <button
        id="popupButton"
        className="popup-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          class="play-button"
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.65 53.3C41.8161 53.3 53.3 41.8161 53.3 27.65C53.3 13.4839 41.8161 2 27.65 2C13.4839 2 2 13.4839 2 27.65C2 41.8161 13.4839 53.3 27.65 53.3Z"
            fill="#0C71E8"
            stroke="white"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.7337 16.3345L36.7275 25.4374C37.9935 26.2609 37.9935 28.1064 36.7275 28.9299L22.7337 38.0328C21.3389 38.9401 19.4888 37.9445 19.4888 36.2865V18.0808C19.4888 16.4228 21.3389 15.4272 22.7337 16.3345Z"
            fill="white"
          />
        </svg>
        ;
      </button>
    </div>
  );
};

export default VideoThumbnail;
