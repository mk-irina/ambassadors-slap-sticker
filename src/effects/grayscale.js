export const applyGrayscaleEffect = (width, height, ctx) => {
  // scan canvas to get image pixels for processing.
  const imageData = ctx.getImageData(0, 0, width, height);

  // Iterate with step 4, each 4 elements in the imageData.data array represent one pixel (rgba).
  for (let i = 0; i < imageData.data.length; i += 4) {
    // Calculate avarage rgb color value to make it grayscale.
    const total =
      imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2];
    const averageColorValue = total / 3;

    // Reasign avarageColorValue to rgb values.
    imageData.data[i] = averageColorValue;
    imageData.data[i + 1] = averageColorValue;
    imageData.data[i + 2] = averageColorValue;
  }

  ctx.putImageData(imageData, 0, 0);
};
