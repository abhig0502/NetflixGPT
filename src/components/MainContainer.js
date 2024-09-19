import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);
  //why we have done this here ?--------
  if (movies === null) return; //this is also known as early return
  //---------------------------
  const mainMovie = movies.results[7];
  // console.log(mainMovie);
  const { original_title, overview, backdrop_path ,id} = mainMovie;
  return (
    <div>
      
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground Background_img={backdrop_path} movieId={id} />
    </div>
  );
};

export default MainContainer;
