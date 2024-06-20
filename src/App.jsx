import React, { useState, useRef, useEffect } from "react";
import CaptionList from "./components/CaptionList";
import CaptionInput from "./components/CaptionInput";
import VideoPlayer from "./components/VideoPlayer";
import DisplayedCaption from "./components/DisplayedCaption";
import "./index.css";
import "./index.css";

const App = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);
  const [currentCaption, setCurrentCaption] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [displayedCaption, setDisplayedCaption] = useState("");
  const [captionIndex, setCaptionIndex] = useState(0);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  const extractVideoId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const addCaption = () => {
    setCaptions([
      ...captions,
      { time: parseFloat(currentTime), text: currentCaption },
    ]);
    setCurrentCaption("");
    setCurrentTime("");
  };

  useEffect(() => {
    if (captions.length > 0 && videoRef.current) {
      const handleTimeUpdate = () => {
        const currentTime = videoRef.current.getCurrentTime();
        const currentCaption = captions[captionIndex];

        if (
          currentCaption &&
          Math.floor(currentTime) >= Math.floor(currentCaption.time)
        ) {
          setDisplayedCaption(currentCaption.text);
          setCaptionIndex(captionIndex + 1);
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setDisplayedCaption("");
          }, 10000);
        }
      };

      const intervalId = setInterval(handleTimeUpdate, 500);

      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutRef.current);
      };
    }
  }, [captions, captionIndex]);

  return (
    <div className="container bg-gray-400">
      <div className="mb-4 ">
        <h1 className="flex justify-center items-center text-2xl "> Enter YouTube URL</h1>
        <input
          type="text"
          placeholder="Enter YouTube URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="border p-2 w-full mb-2"
        />
      </div>
      <VideoPlayer
        videoUrl={videoUrl}
        videoRef={videoRef}
        extractVideoId={extractVideoId}
      />
      <CaptionInput
        currentCaption={currentCaption}
        setCurrentCaption={setCurrentCaption}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        addCaption={addCaption}
      />
      <CaptionList captions={captions} />
      <DisplayedCaption displayedCaption={displayedCaption} />
    </div>
  );
};

export default App;
