import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useWebcamCapture } from './useWebcamCapture';
import { Header } from './components/Header';
import { StickersGallery } from './components/StickersGallery';
import { WebcamFeed } from './components/WebcamFeed';
import { Readme } from './pages/Readme';
import { Modal } from './components/Modal';
import { Gallery } from './pages/Gallery';
import { EffectsGallery } from './components/EffectsGallery';

function App(props) {
  // currently active sticker
  const [sticker, setSticker] = useState();
  // currently active effect
  const [effect, setEffect] = useState();
  // stores pictures into the gallary. Idealy should be fetched from a server
  const [pictures, setPictures] = useState([]);

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
    resetPicture // resets captured picture data object
  ] = useWebcamCapture(sticker?.img, 'SLAPPE!', effect);

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
              <StickersGallery setSticker={setSticker} />
              <EffectsGallery setEffect={setEffect} />
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

        {/* /** * Gallery route */}
        <Route path="/gallery" element={<Gallery pictures={pictures} />} />
      </Routes>
    </div>
  );
}

export default App;
