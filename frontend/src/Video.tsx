import { useRef, FC, useEffect } from "react";
import videojs from "video.js";

// Styles
import "video.js/dist/video-js.css";

interface IVideoPlayerProps {
  options: videojs.PlayerOptions;
}

const initialOptions: videojs.PlayerOptions = {
  controls: true,
  fluid: true,
  controlBar: {
    volumePanel: {
      inline: false,
    },
  },
};

const VideoPlayer: FC<IVideoPlayerProps> = ({ options }) => {
  const videoNode = useRef<HTMLVideoElement | null>(null);
  const player = useRef<videojs.Player>();

  useEffect(() => {
    if (videoNode.current) {
      player.current = videojs(videoNode.current, {
        ...initialOptions,
        ...options,
      }).ready(function () {
        // console.log('onPlayerReady', this);
      });
    } else {
      console.log("ALO");
    }

    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [options, videoNode.current]);

  return (
    <>{videoNode.current && <video ref={videoNode} className="video-js" />}</>
  );
};

export default VideoPlayer;
