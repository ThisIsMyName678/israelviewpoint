import React from "react";
import VideoCard from "./VideoCard"; // Adjust the import path

const VideoCardList = ({ videoData }) => {
  return (
    <div className="row-container py-4 md:py-6 lg:py-8 mx-auto flex flex-wrap justify-between px-4 my-4">
      {videoData.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};

export default VideoCardList;
