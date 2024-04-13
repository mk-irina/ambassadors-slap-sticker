import { useEffect, useState } from "react";
// import { createUseStyles } from "react-jss";
import { useWebcamCapture } from "./useWebcamCapture";
// import logo from './logo.svg'
import logo from "./slap.png";
import yoda from ".//images/yoda.png";
import golum from ".//images/golum.png";
import rick from ".//images/rick.png";
import face1 from ".//images/face1.png";
import face2 from ".//images/face2.png";
import face3 from ".//images/face3.png";
import face4 from ".//images/face4.png";
import face5 from ".//images/face5.png";
import dart from ".//images/dart.png";
import will from ".//images/will.png";
import hand from ".//images/hand1.png";

import { Link, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { StickersGallery } from "./components/StickersGallery";
import { WebcamFeed } from "./components/WebcamFeed";
import { Readme } from "./pages/Readme";
import { Modal } from "./components/Modal";
import { Gallery } from "./pages/Gallery";

const stickers = [
  logo,
  yoda,
  golum,
  rick,
  // face1,
  face2,
  face3,
  face4,
  face5,
  dart,
  will,
  hand,
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

  const [pictures, setPictures] = useState([]); // idealy should be fetched from server

  const savePicture = (picture) => {
    setPictures((prevState) => {
      prevState.unshift(picture);
      return prevState;
    });
  };

  const updatePicture = (picture) => {
    setPictures((prevState) => {
      prevState.shift();
      prevState.unshift(picture);
      return prevState;
    });
  };

  // webcam behavior hook
  const [
    handleVideoRef, // callback function to set ref for invisible video element
    handleCanvasRef, // callback function to set ref for main canvas element
    handleCapture, // callback function to trigger taking the picture
    picture, // latest captured picture data object
    resetPicture,
  ] = useWebcamCapture(sticker?.img, "SLAPPE!");

  useEffect(() => {
    if (picture === undefined) {
      return;
    }
    savePicture(picture);
  }, [picture]);

  return (
    <div className="bg-[#F1F3F5] max-w-full py-12 px-20">
      <Header />
      <Routes>
        {/* /** * Main app route */}
        <Route
          path="/"
          element={
            <main className="w-4/5 max-w-screen-lg m-auto">
              <StickersGallery setSticker={setSticker} stickers={stickers} />
              <WebcamFeed
                handleCanvasRef={handleCanvasRef}
                handleVideoRef={handleVideoRef}
                handleCapture={handleCapture}
              />
              <Modal
                onPictureReset={resetPicture}
                picture={picture}
                onPictureUpdate={updatePicture}
              />
            </main>
          }
        />
        {/* /** * Readme route */}
        <Route path="/readme" element={<Readme />} />
        <Route path="/gallery" element={<Gallery pictures={pictures} />} />
      </Routes>
    </div>
  );
}

export default App;
