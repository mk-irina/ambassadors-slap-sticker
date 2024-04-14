export const applyGrayscaleEffect = (width, height, ctx) => {
  const imageData = ctx.getImageData(0, 0, width, height);

  for (let i = 0; i < imageData.data.length; i += 4) {
    const total =
      imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2];
    const averageColorValue = total / 3;

    imageData.data[i] = averageColorValue;
    imageData.data[i + 1] = averageColorValue;
    imageData.data[i + 2] = averageColorValue;
  }

  ctx.putImageData(imageData, 0, 0);
};
