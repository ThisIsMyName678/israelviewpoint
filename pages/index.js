// pages/index.js
import React from "react";
import Navbar from "../components/Navbar";
import HeadingSection from "../components/HeadingSection";
import VideoCardList from "../components/VideoCardList";
import videoData from "../data/videoData.json"; // Adjust the path

function HomePage() {
  return (
    <div>
      <Navbar />
      <HeadingSection />
      {/* Render the VideoCardList component with video data */}
      <VideoCardList videoData={videoData} />
    </div>
  );
}

export default HomePage;
