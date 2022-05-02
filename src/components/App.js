import video from "../data/video.js";
import Player from "./Player.js";
import Details from "./Details";
import LikesSection from "./LikesSection.js";
import Comments from "./Comments.js";
//import { useState } from "react";

function App() {
  console.log("Here's your data:", video);
  const {title, embedUrl, views, createdAt, upvotes, downvotes, comments} = video;

  

  return (
    <div className="App">
      <Player url={embedUrl} />
      <Details title={title} views={views} createdAt={createdAt} />
      <LikesSection upvotes={upvotes} downvotes={downvotes} />      
      <Comments comments={comments} />
    </div>
  )
}

export default App;
