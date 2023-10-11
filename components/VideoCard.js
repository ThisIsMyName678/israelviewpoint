// components/VideoCard/VideoCard.js
import React from "react";
import VideoThumbnail from "./VideoCard/VideoThumbnail";
import VideoDetails from "./VideoCard/VideoDetails";
import ProfileInfo from "./VideoCard/ProfileInfo";

const thumbnailURL = "https://imageupload.io/ib/hFgxhfV004Rtij5_1697014489.png"; // Your thumbnail URL

const VideoCard = ({ video }) => {
  return (
    <div className="card flex-shrink-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 p-4 md:p-5 lg:p-5 rounded-lg">
      <VideoThumbnail thumbnail={thumbnailURL} videoLink={video.videoLink} />
      <VideoDetails name={video.name} />
      {/* <ProfileInfo profile={video.profile} /> */}
    </div>
  );
};

export default VideoCard;
