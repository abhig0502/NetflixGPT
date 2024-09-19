import React from "react";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useState } from "react";

const VideoBackground = ({ Background_img, movieId }) => {
  // console.log({ movieId });
  const [trailerKey, setTrailerKey] = useState(null);
  //fetch trailer video
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const FilterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = FilterData ? FilterData[0] : json.results[0];
    setTrailerKey(trailer?.key);
    console.log(trailer?.key);
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
  return (
    <div className="">
      <iframe
       className="w-[100%] aspect-video"
        src={"https://www.youtube.com/embed/"+trailerKey+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>

      {/* <div>
        <img
          className="w-[100%] h-[80%] absolute -z-10"
          alt="background-img"
          src={"https://image.tmdb.org/t/p/w500/" + Background_img}
        />
      </div> */}
    </div>
  );
};

export default VideoBackground;
