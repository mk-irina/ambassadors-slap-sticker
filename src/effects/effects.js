import { Particles } from "./particles";
import { applyGrayscaleEffect } from "./grayscale";

const NUMBER_OF_PARTICLES = 2000;

const particles = new Particles(NUMBER_OF_PARTICLES);

export const particlesEffectConfig = {
  init: particles.init,
  render: particles.render,
};

export const grayscaleEffectConfig = {
  init: () => {}, //noop
  render: applyGrayscaleEffect,
};
