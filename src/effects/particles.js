import { applyGrayscaleEffect } from "./grayscale";

export class Particle {
  constructor(canvasWidth, canvasHeight, ctx) {
    this.ctx = ctx;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.x = Math.random() * canvasWidth;
    this.y = 0;

    this.velocity = Math.random() * 10.5;
    this.size = Math.random() * 1.5 + 1;
  }

  updatePosition = () => {
    this.y += this.velocity;

    if (this.y >= this.canvasHeight) {
      this.y = 0;
      this.x = Math.random() * this.canvasWidth;
    }
  };

  updateCanvasSize = (width, height) => {
    this.canvasWidth = width;
    this.canvasHeight = height;
  };

  render = () => {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#efefef";
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  };
}

export class Particles {
  constructor(numberOfParticles) {
    this.numberOfParticles = numberOfParticles;
    this.particles = [];
  }

  init = (width, height, ctx) => {
    this.reset();

    for (let i = 0; i < this.numberOfParticles; i++) {
      this.particles.push(new Particle(width, height, ctx));
    }
  };

  reset = () => {
    this.particles = [];
  };

  render = (width, height, ctx) => {
    applyGrayscaleEffect(width, height, ctx);

    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].updateCanvasSize(width, height);
      this.particles[i].updatePosition();
      this.particles[i].render();
    }
  };
}
