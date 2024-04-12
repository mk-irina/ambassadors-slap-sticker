import { useState } from "react";
// import { createUseStyles } from "react-jss";
import { useWebcamCapture } from "./useWebcamCapture";
// import logo from './logo.svg'
import logo from "./slap.png";

import { Link, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { StickersGallery } from "./components/StickersGallery";
import { WebcamFeed } from "./components/WebcamFeed";
import { Readme } from "./components/Readme";
import { Modal } from "./components/Modal";

const stickers = [logo].map((url) => {
  const img = document.createElement("img");
  img.src = url;
  return { img, url };
});

function App(props) {
  // css classes from JSS hook
  // const classes = useStyles(props);
  // currently active sticker
  const [sticker, setSticker] = useState();
  // title for the picture that will be captured
  const [title, setTitle] = useState("SLAPPE!");

  // webcam behavior hook
  const [
    handleVideoRef, // callback function to set ref for invisible video element
    handleCanvasRef, // callback function to set ref for main canvas element
    handleCapture, // callback function to trigger taking the picture
    picture, // latest captured picture data object
  ] = useWebcamCapture(sticker?.img, title);

  return (
    <div className="bg-[#F1F3F5]">
      <Header />
      <Routes>
        {/* /** * Main app route */}
        <Route
          path="/"
          element={
            <main>
              <StickersGallery setSticker={setSticker} stickers={stickers} />
              <WebcamFeed
                handleCanvasRef={handleCanvasRef}
                handleVideoRef={handleVideoRef}
                handleCapture={handleCapture}
              />
              <Modal picture={picture} />
            </main>
          }
        />

        {/* /** * Readme route */}
        <Route path="/readme" element={<Readme />} />
      </Routes>
    </div>
  );
}

export default App;
