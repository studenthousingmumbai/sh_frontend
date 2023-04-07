import { useRef } from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoLink, width }) => {
  const playerRef = useRef(null);

  const getVideoIdFromLink = (link) => {
    if(link && link !== "") { 
      const url = new URL(link);
      const searchParams = new URLSearchParams(url.search);
      return searchParams.get('v');
    }
  };

  const videoId = getVideoIdFromLink(videoLink);

  const opts = {
    height: '390',
    width: '512',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className={`${!width && 'w-full' || width}`}>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={(event) => {
          playerRef.current = event.target;
        }}
        className={`${!width && 'w-full' || width}`}
      />
    </div>
  );
};

export default VideoPlayer;
