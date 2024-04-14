import bwcat from '../images/effects/bwcat.jpg';
import catinsnow from '../images/effects/catinsnow.png';
import noeffect from '../images/effects/noeffect.png';
import {
  grayscaleEffectConfig,
  particlesEffectConfig
} from '../effects/effects';

const effects = [
  { url: noeffect, name: 'noeffect' },
  { url: bwcat, name: 'grayscaleEffect' },
  { url: catinsnow, name: 'particlesEffect' }
];

export const EffectsGallery = ({ setEffect }) => {
  const onSetEffect = (name) => {
    switch (name) {
      case 'noeffect':
        setEffect(undefined);
        break;
      case 'grayscaleEffect':
        setEffect(grayscaleEffectConfig);
        break;
      case 'particlesEffect':
        setEffect(particlesEffectConfig);
        break;
      default:
        setEffect(undefined);
    }
  };

  return (
    <section className="flex flex-col gap-5 my-10">
      <h3 className="text-2xl">Select your effect...</h3>

      <div className="flex  gap-3 w-full overflow-x-auto">
        {effects.map((effect, idx) => {
          return (
            <button
              onClick={() => onSetEffect(effect.name)}
              key={idx}
              className="size-28 shadow-sm bg-white rounded-md flex-shrink-0 effects-button"
            >
              <img
                src={effect.url}
                alt="slap"
                className="h-full w-full object-cover rounded-md"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};
