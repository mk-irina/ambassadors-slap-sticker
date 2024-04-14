import { GiHand } from 'react-icons/gi';
import { Picture } from '../components/Picture';

export const Gallery = ({ pictures }) => {
  return (
    <div className="max-w-screen-xl mt-14 m-auto">
      {pictures.length ? (
        <div className="flex justify-start items-center gap-4 flex-wrap">
          {pictures.map((picture, idx) => (
            <Picture key={idx} picture={picture} />
          ))}
        </div>
      ) : (
        <h3 className="mt-20 flex align-center gap-2 justify-center text-center text-2xl">
          Slap your picture first!
          <GiHand />
        </h3>
      )}
    </div>
  );
};
