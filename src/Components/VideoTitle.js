import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute text-white pt-[20%] px-6 lg:px-24 bg-gradient-to-r from-black">
      <h1 className="text-2xl lg:text-6xl font-bold">{title}</h1>
      <p className="hidden lg:inline-block py-6 text-lg w-[35%]">{overview}</p>
      <div className="my-4 lg:m-0">
        <button className="py-1 px-3 lg:py-4 lg:px-10  bg-white text-black text-lg  rounded-lg mx-1 hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden lg:inline-block p-4 px-12 bg-gray-600 text-white text-lg bg-opacity-50 rounded-lg mx-1 hover:bg-opacity-80">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
