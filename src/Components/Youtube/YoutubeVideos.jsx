import { useState, useEffect } from "react";

import "./Youtube.css";
function YoutubeVideos() {
  const [youTubeVideos, setyouTubeVideos] = useState([]);
  useEffect(() => {
  fetch(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyCHkwfxu5k5cp0o64n_LpSuwZ6n2fgINfA"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setyouTubeVideos(data.items);
    });
  }, []);



  return (
    <>
      <h1>Latest Videos</h1>
      <div className="video-wrapper">
        {youTubeVideos?.map((video, i) => {
          let id = video.id.videoId;
          return (
            <div key={i} className="video-container">
              <div>
                <a
                  className="video-link"
                  href={`https://www.youtube.com/watch?v=${id}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={video.snippet.thumbnails.high.url} alt="" />
                  <br />
                  <br />
                  <h5>{video.snippet.title}</h5>
                  <p>{video.snippet.description}</p>
                </a>
                <p>{video.snippet.channelTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default YoutubeVideos;
