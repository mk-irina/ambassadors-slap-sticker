import { Particles } from './particles';
import { applyGrayscaleEffect } from './grayscale';

const NUMBER_OF_PARTICLES = 2000;

const particles = new Particles(NUMBER_OF_PARTICLES);

// Effect config should have init and render methods.
// useWebcamCapture uses 'init' during canvas initializations and 'render' during each animation render frome cyrcle.
export const particlesEffectConfig = {
  init: particles.init,
  render: particles.render
};

export const grayscaleEffectConfig = {
  init: () => {}, //noop
  render: applyGrayscaleEffect
};
