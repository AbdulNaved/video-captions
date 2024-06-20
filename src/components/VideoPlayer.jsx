import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoUrl, videoRef, extractVideoId }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    videoUrl && (
      <YouTube
        className=" bg-gray-400 flex justify-center items-center mt-5"
        videoId={extractVideoId(videoUrl)}
        opts={opts}
        onReady={(event) => {
          videoRef.current = event.target;
        }}
      />
    )
  );
};

export default VideoPlayer;
