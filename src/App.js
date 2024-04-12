import { useState } from "react";
// import { createUseStyles } from "react-jss";
import { useWebcamCapture } from "./useWebcamCapture";
// import logo from './logo.svg'
import logo from "./slap.png";
// import yoda from "./yoda.png";
// import golum from "./golum.png";
// import rick from "./rick.png";
// import face1 from "./face1.png";
// import face2 from "./face2.png";
// import face3 from "./face3.png";
// import face4 from "./face4.png";
// import face5 from "./face5.png";
// import dart from "./dart.png";
// import will from "./will.png";
// import hand from "./hand1.png";

import { Link, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { StickersGallery } from "./components/StickersGallery";
import { WebcamFeed } from "./components/WebcamFeed";
import { Readme } from "./components/Readme";
import { Modal } from "./components/Modal";

// import { Button } from "@material-tailwind/react";
// import { Dialog } from "@material-tailwind/react";

const stickers = [
  logo,
  // yoda,
  // golum,
  // rick,
  // face1,
  // face2,
  // face3,
  // face4,
  // face5,
  // dart,
  // will,
  // hand,
].map((url) => {
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
    <div className="bg-[#F1F3F5] max-w-full">
      <Header />
      <Routes>
        {/* /** * Main app route */}
        <Route
          path="/"
          element={
            <main className="w-3/4 max-w-screen-lg m-auto">
              <StickersGallery setSticker={setSticker} stickers={stickers} />
              <WebcamFeed
                handleCanvasRef={handleCanvasRef}
                handleVideoRef={handleVideoRef}
                handleCapture={handleCapture}
              />
              <Modal picture={picture} title={title} setTitle={setTitle} />
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
