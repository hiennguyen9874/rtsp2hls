import { useRef, useState } from "react";
import ReactHlsPlayer from "react-hls-player";

import "./App.css";

function App() {
  const playerRef = useRef<HTMLVideoElement>(null);

  const [url, setUrl] = useState<string>(
    "/source0/index.m3u8"
  );

  return (
    <div
      className="App"
      style={{
        width: "auto",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        type="text"
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        style={{
          width: "50%",
          backgroundColor: "white",
          border: "2px solid #ccc",
          borderRadius: "4px",
          boxSizing: "border-box",
          color: "red",
          padding: "4px 8px",
          textDecoration: "none",
          margin: "4px 10px",
          cursor: "pointer",
          fontSize: "20px",
        }}
      ></input>
      <ReactHlsPlayer
        src={url}
        autoPlay={true}
        controls={true}
        width={1280}
        height="auto"
        playerRef={playerRef}
      />
    </div>
  );
}

export default App;
