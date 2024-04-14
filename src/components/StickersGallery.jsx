import batman from '../images/stickers/batmanslap.png';
import cat from '../images/stickers/cat.png';
import cat2 from '../images/stickers/cat2.png';
import slapcat from '../images/stickers/slapcat.png';
import dart from '../images/stickers/dart.png';
import face1 from '../images/stickers/face1.png';
import face2 from '../images/stickers/face2.png';
import face3 from '../images/stickers/face3.png';
import face5 from '../images/stickers/face5.png';
import frog1 from '../images/stickers/frog1.png';
import frog2 from '../images/stickers/frog2.png';
import golum from '../images/stickers/golum.png';
import hand from '../images/stickers/hand1.png';
import nesuko from '../images/stickers/nesuko.png';
import rick from '../images/stickers/rick.png';
import slap from '../images/stickers/slap.png';
import slap1 from '../images/stickers/slap1.png';
import slipper from '../images/stickers/slipper.png';
import will from '../images/stickers/will.png';
import yoda from '../images/stickers/yoda.png';

const stickers = [
  slap,
  slap1,
  slipper,
  slapcat,
  yoda,
  batman,
  nesuko,
  dart,
  will,
  cat,
  cat2,
  frog1,
  frog2,
  golum,
  rick,
  face1,
  face2,
  face3,
  face5,
  hand
];

export const StickersGallery = ({ setSticker }) => {
  return (
    <section className="flex flex-col gap-5 mt-14 mb-10">
      <h3 className="text-2xl">Select your sticker...</h3>

      <div className="flex  gap-3 w-full overflow-x-auto">
        {stickers.map((sticker, idx) => {
          return (
            <button
              onClick={() => setSticker(sticker)}
              key={idx}
              className="size-28 shadow-sm bg-white rounded-md flex-shrink-0"
            >
              <img
                src={sticker}
                alt="slap"
                className="h-full w-full object-contain"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};
